import mysql from "mysql";


let db = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "be6fbe79d5626b",
    password: "0ef5d7ed",
    database: "heroku_df351fc08afdf05",
  });
  
  function handleDisconnect() {
    console.error("MySQL Connection Error: Connection lost. Attempting to reconnect...");
  
    // Create a new connection
    db = mysql.createConnection({
      host: "us-cdbr-east-06.cleardb.net",
      user: "be6fbe79d5626b",
      password: "0ef5d7ed",
      database: "heroku_df351fc08afdf05",
    });
  
    // Attempt to reconnect
    db.connect((err) => {
      if (err) {
        console.error("Error reconnecting to MySQL:", err.message);
        // Retry the connection after a timeout (e.g., 5 seconds)
        setTimeout(handleDisconnect, 5000);
      } else {
        console.log("Reconnected to MySQL server!");
      }
    });
  
    // Attach event listeners to the new connection
    db.on("error", (err) => {
      console.error("MySQL Connection Error:", err.message);
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        handleDisconnect();
      } else {
        throw err;
      }
    });
  }
  
  // Handle MySQL connection error
  db.on("error", (err) => {
    console.error("MySQL Connection Error:", err.message);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
  
  export { db };
  