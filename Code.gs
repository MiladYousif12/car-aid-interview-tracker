/**
 * CAR AID INTERVIEW TRACKER - BACKEND SCRIPT (Cloud Sync Mode)
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions -> Apps Script.
 * 3. Copy/Paste this entire file into the editor.
 * 4. Deploy -> New Deployment -> Web App (Set to "Anyone").
 * 5. Replace SCRIPT_URL in index.html with the URL provided.
 */

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Check if we are updating an existing row
    if (data.id) {
      const rows = sheet.getDataRange().getValues();
      for (let i = 1; i < rows.length; i++) {
        if (rows[i][10] == data.id) { // ID is in column K (index 10)
          const range = sheet.getRange(i + 1, 1, 1, 11);
          const updatedRow = [
            new Date(), // Timestamp
            data.candidate_name,
            data.role,
            data.phone,
            data.email,
            data.interview_date,
            data.location,
            data.years_experience,
            data.current_shop,
            data.pay_range,
            data.id // ID preserved
          ];
          range.setValues([updatedRow]);
          return ContentService.createTextOutput("Updated").setMimeType(ContentService.MimeType.TEXT);
        }
      }
    }
    
    // New Row: [Timestamp, Name, Role, Phone, Email, Int Date, Location, Exp, Shop, PayRange, ID]
    const newRow = [
      new Date(),
      data.candidate_name,
      data.role,
      data.phone,
      data.email,
      data.interview_date,
      data.location,
      data.years_experience || "",
      data.current_shop || "",
      data.pay_range || "",
      data.id || Date.now().toString()
    ];
    
    sheet.appendRow(newRow);
    return ContentService.createTextOutput("Saved").setMimeType(ContentService.MimeType.TEXT);
    
  } catch (err) {
    return ContentService.createTextOutput(err.toString()).setMimeType(ContentService.MimeType.TEXT);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const rows = sheet.getDataRange().getValues();
  
  const data = rows.slice(1).map(row => ({
    timestamp: row[0],
    candidate_name: row[1],
    role: row[2],
    phone: row[3],
    email: row[4],
    interview_date: row[5],
    location: row[6],
    years_experience: row[7],
    current_shop: row[8],
    pay_range: row[9],
    id: row[10]
  }));
  
  data.reverse(); // Newest first
  
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function doDelete(id) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][10] == id) {
      sheet.deleteRow(i + 1);
      return true;
    }
  }
  return false;
}
