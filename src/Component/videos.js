import Airtable from "airtable";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
export const airtableConfig = () => {
  const API_KEY =
    "patSrX3sh1ikvAtDh.d9bed8f92dd3c66e92901fb7769b78181c36d2e1bf6e3431189cc2f980dd33bd";
  const BASE_ID = "appvbNN9bubqRe67K";

  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: API_KEY,
  });

  return Airtable.base(BASE_ID);
};

const fetchData = async () => {
  const base = await airtableConfig();
  const res = await base.table("Projects").select({}).all();
  return res;
};

export function Videos() {
  const [data, setdata] = useState([]);

  const getData = async () => {
    const res = await fetchData();
    setdata(res);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log("outside function", data);

  return (
    <a
      style={{
        margin: 0,

        backgroundColor: "black",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",

        justifyContent: "space-between",
      }}
    >
      {data.map((cur) => (
        <Card cur={cur} />
      ))}
    </a>
  );
}

// 1. font uur baina
// 2. category paddings
// 3. category ni tsuuhun scroll bgayu
// 4. zahiin bichlegnud container ee davad bna
// 5. scroll hihed sidebar dagaj scroldood bna
// 6. scroll deer header category 2 dagaj dooshlood bna

const Card = ({ cur }) => {
  const [show, setshow] = useState(false);

  return (
    <button
      style={{ backgroundColor: "black", border: 0, minHeight: 400,  }}
      className="robotoFont"
      videoUrl={cur.fields.videoUrl}

    >
      <div
        style={{
          margin: 20,
          position: "relative",
          width: 300,
          height: 300,
        }}
      >
        <div>
          <img
            src={cur.fields.videoImg}
            style={{ width: 320 }}
            onClick={() => setshow(true)}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "start" }}>
          <div>
            <img
              style={{ borderRadius: 20, margin: 10, width: 40 }}
              src={cur.fields.userImg}
            />
          </div>

          <div style={{ fontSize: 20 }}>
            <div style={{ color: "white" }}>{cur.fields.videoTitle}</div>

            <div style={{ color: "white" }}>{cur.fields.channelName}</div>

            <div style={{ color: "white" }}>
              {cur.fields.totalViews}.{cur.fields.uploadedDate}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: show ? "flex" : "none" }} className="ork">
        <ReactPlayer width={1500} height={1000} controls url={cur.fields.videoUrl} />
        <button className="exit"   onClick={() => setshow(false)}>X</button>
      </div>
    </button >
  );
};
