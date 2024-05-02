const eventConfirmationTemplate = (data) => {
    console.log("data from template ", data);
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Appointment Confirmation</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f5f5f5;
                  margin: 0;
                  padding: 0;
              }
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #fff;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
      
              h1 {
                  color: #333;
              }
      
              p {
                  color: #666;
              }
      
              .confirmation-details {
                  margin-top: 20px;
                  border-top: 1px solid #ccc;
                  padding-top: 10px;
              }
      
              .salon-info {
                  margin-top: 20px;
              }
      
              .salon-info p {
                  color: #333;
              }
              .logo-container{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin:10px 0px;
              }
              .logo-container img {
                  height: 180px;
                  object-fit:cover;
                  width:100%;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="logo-container">
                  <img src="https://img.freepik.com/free-photo/glowing-stage-light-illuminates-cheering-rock-fans-generated-by-ai_188544-37983.jpg?t=st=1714667991~exp=1714671591~hmac=c10dcfe38abddee8a22038d0904b5e89603f88ccd89b40d8ca0554963acbeb43&w=1060" alt="event-img"/>
              </div>
              <h1>Event Confirmation !</h1>
              <p>Dear <b>${data.full_name},</b></p>
              <p>Your event registration is succesfull. Your event is <b>${data.event}</b> and your confirmation id is <b>${data.event_id}</b>.</p>
          </div>
      </body>
      </html>
      `;
  };
  
  module.exports = eventConfirmationTemplate;