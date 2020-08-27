
//this is a function that fires when the webapp receives a GET request
function doGet(e) {
  return HtmlService.createHtmlOutput("request received");
}

//this is a function that fires when the webapp receives a POST request
function doPost(e) {
  var myData = JSON.parse(e.postData.contents);
  
 
  var donor = myData.donor;
  var items = myData.lineitems[0];
  var contribution = myData.contribution;
  
    // This asks google sheets to get the active sheet
  var sheet = SpreadsheetApp.getActiveSheet();
  
    // calculate the last row in the spreadsheet as the largest number between 1 or the last row
    // this is so that the number is never 0, so in range 1 to the value of the last row 
  var lastRow = Math.max(sheet.getLastRow(),1);

    // Insert a new row at the index calculated above
  sheet.insertRowAfter(lastRow);

  var timestamp = new Date();
  

    // get the cell in the row you created (lastRow+1), and go to the 
    // colums 1,2,3,4,5 and set the value to the value you created above
  sheet.getRange(lastRow + 1, 1).setValue(timestamp);
  sheet.getRange(lastRow + 1, 2).setValue(donor.lastname);
  sheet.getRange(lastRow + 1, 3).setValue(donor.firstname);
  sheet.getRange(lastRow + 1, 4).setValue(donor.addr1);
  sheet.getRange(lastRow + 1, 5).setValue(donor.city);
  sheet.getRange(lastRow + 1, 6).setValue(donor.state);
  sheet.getRange(lastRow + 1, 7).setValue(donor.zip);
  sheet.getRange(lastRow + 1, 8).setValue(donor.country);
  sheet.getRange(lastRow + 1, 9).setValue(donor.email);
  sheet.getRange(lastRow + 1, 10).setValue(donor.phone);
  sheet.getRange(lastRow + 1, 11).setValue(contribution.contributionForm);
  sheet.getRange(lastRow + 1, 12).setValue(contribution.expressSignup);
  sheet.getRange(lastRow + 1, 13).setValue(contribution.isExpress);
  sheet.getRange(lastRow + 1, 14).setValue(contribution.recurringPeriod);
  sheet.getRange(lastRow + 1, 15).setValue(items.amount);

 
  SpreadsheetApp.flush();

  return HtmlService.createHtmlOutput("post request received");
  }