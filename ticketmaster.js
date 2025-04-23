import axios from "axios";
import https from "https";

const agent = new https.Agent({ rejectUnauthorized: false });

try {
  const response = await axios.get(
    "https://www.ticketmaster.co.il/wbtxapi/api/v1/bxcached/event/getAllTopEvent/iw",
    { httpsAgent: agent }
  );
  console.log("✅ Data received:", response.data);
} catch (error) {
  console.error("❌ Error:", error.message);
}
