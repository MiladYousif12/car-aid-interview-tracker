/**
 * Car Aid Recruiting - Google Sheets Backend for Interview Tracker
 * 
 * Instructions:
 * 1. Open your Car Aid Recruiting Google Sheet.
 * 2. Go to 'Extensions' -> 'Apps Script'.
 * 3. Delete any existing code and paste this in.
 * 4. Click 'Deploy' -> 'New Deployment'.
 * 5. Select 'Web App'.
 * 6. Set 'Execute as' to 'Me'.
 * 7. Set 'Who has access' to 'Anyone'.
 * 8. Deploy and copy the Web App URL!
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Column Mapping: [Timestamp, Candidate Name, Role, Phone, Email, Interview Date, Location, Interviewer, Notes]
    const newRow = [
      new Date(), // Timestamp
      data.candidate_name || "Unknown",
      data.role,
      data.phone,
      data.email || "", // New Email Field
      data.interview_date,
      data.location,
      data.interviewer,
      data.notes
    ];
    
    sheet.appendRow(newRow);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Interview logged successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    console.error(err);
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const rows = sheet.getDataRange().getValues();
    
    if (rows.length < 2) {
      return ContentService.createTextOutput(JSON.stringify([])).setMimeType(ContentService.MimeType.JSON);
    }
    
    const data = rows.slice(1).map(row => ({
      timestamp: row[0],
      candidate_name: row[1],
      role: row[2],
      phone: row[3],
      email: row[4],
      interview_date: row[5],
      location: row[6],
      interviewer: row[7],
      notes: row[8]
    }));
    
    data.reverse(); // Newest first
    
    return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
