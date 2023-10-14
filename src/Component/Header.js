export function Header() {
  return (
    <div style={{ display: "flex", flexDirection: "row",}} className="fixed justifycontent">
      <div style={{ display: "flex", alignItems: "center", marginTop:20 }}>
        <div style={{ marginRight: 40, margin: 10 }}>
          <svg
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 1H0V0H18V1ZM18 6H0V7H18V6ZM18 12H0V13H18V12Z"
              fill="white"
            />
          </svg>
        </div>

        <img src="youtube.jpeg" width="90px" height="40px" />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <input
          placeholder="Search"
          style={{
            backgroundColor: "RGB(18,18,18)",
            border: "0 solid black",
            color: "white",
            height: 40,
            width: 362,
            fontSize: 20,
            padding: 5,
            borderRadius: 10,
          }}
        ></input>

        <button
          style={{
            color: "white",
            backgroundColor: "RGB(47,47,47)",
            height: 36,
            width: 50,
            padding: 10,
            border: "0px solid black",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.87 17.17L12.28 11.58C13.35 10.35 14 8.75 14 7C14 3.13 10.87 0 7 0C3.13 0 0 3.13 0 7C0 10.87 3.13 14 7 14C8.75 14 10.35 13.35 11.58 12.29L17.17 17.88L17.87 17.17ZM7 13C3.69 13 1 10.31 1 7C1 3.69 3.69 1 7 1C10.31 1 13 3.69 13 7C13 10.31 10.31 13 7 13Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          style={{
            backgroundColor: "black",
            height: 36,
            width: 50,
            padding: 10,
            border: "0px solid black",
            borderRadius: 300,
            marginLeft: 10,
          }}
        >
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0C5.34 0 4 1.37 4 3.07V8.93C4 10.63 5.34 12 7 12C8.66 12 10 10.63 10 8.93V3.07C10 1.37 8.66 0 7 0ZM13.5 9H12.5C12.5 12.03 10.03 14.5 7 14.5C3.97 14.5 1.5 12.03 1.5 9H0.5C0.5 12.24 2.89 14.93 6 15.41V18H8V15.41C11.11 14.93 13.5 12.24 13.5 9Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div style={{display:"flex", justifyContent: "space-evenly", flexDirection:"row", width: 500,alignItems: "center", height: 90}}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8H9V11H7V8H4V6H7V3H9V6H12V8ZM15 1H1V13H15V6.61L19 8.44V3.56L15 5.39V1ZM16 0V3.83L20 2V10L16 8.17V14H0V0H16Z"
            fill="white"
          />
        </svg>
        <svg
          width="40"
          height="40"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0V4H16V0H12ZM15 3H13V1H15V3ZM12 6V10H16V6H12ZM15 9H13V7H15V9ZM6 0V4H10V0H6ZM9 3H7V1H9V3ZM6 6V10H10V6H6ZM9 9H7V7H9V9ZM12 12V16H16V12H12ZM15 15H13V13H15V15ZM6 12V16H10V12H6ZM9 15H7V13H9V15ZM0 0V4H4V0H0ZM3 3H1V1H3V3ZM0 6V10H4V6H0ZM3 9H1V7H3V9ZM0 12V16H4V12H0ZM3 15H1V13H3V15Z"
            fill="white"
          />
        </svg>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20H14C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20ZM20 17.35V19H4V17.35L6 15.47V10.32C6 7.40001 7.56 5.10001 10 4.34001V3.96001C10 2.54001 11.49 1.46001 12.99 2.20001C13.64 2.52001 14 3.23001 14 3.96001V4.35001C16.44 5.10001 18 7.41001 18 10.33V15.48L20 17.35ZM19 17.77L17 15.89V10.42C17 7.95001 15.81 6.06001 13.87 5.32001C12.61 4.79001 11.23 4.82001 10.03 5.35001C8.15 6.11001 7 7.99001 7 10.42V15.89L5 17.77V18H19V17.77Z"
            fill="white"
          />
        </svg>
        <img src="profile.jpeg" style={{width:70, height:70, border: "black 1px solid",borderRadius:300}}/>
      </div>
    </div>
  );
}
