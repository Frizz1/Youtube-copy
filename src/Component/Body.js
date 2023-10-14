
export function Body() {
  return (
    <div style={{ display: "flex", marginTop: 90} } className="robotoFont fixed">
      <div style={{ borderBottom: "2px solid RGB(48,48,48)", width: 250}} className="sidebar">
        <div
          style={{
            margin: 30,
            borderWidth: 5,
            borderBottomColor: "white",
            borderBottom: "2px solid RGB(48,48,48)",
          }}
        >
          {Icon.map((cur) => (
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: 8 }}>{cur.icon}</div>

              <div style={{ color: "RGB(245,245,245)", margin: 10 }}>
                {cur.text}
              </div>
            </div>
          ))}
        </div>
        <div style={{ margin: 30, borderBottom: "2px solid RGB(48,48,48)" }}>
          {" "}
          {sideItems.map((cur) => (
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: 10 }}>{cur.svg}</div>
              <div style={{ color: "RGB(245,245,245)", margin: 10 }}>
                {cur.text}
              </div>{" "}
            </div>
          ))}
        </div>
        <div style={{ borderBottom: "2px solid RGB(48,48,48)", gap: 50 }}>
          <h3 style={{ color: "RGB(170,170,170)", margin: 15 }}>
            Subscriptions
          </h3>
          <div
            style={{ margin: 30, borderWidth: 5, borderBottomColor: "white" }}
          >
            {Name.map((nam) => (
              <div
                style={{
                  color: "RGB(245,245,245)",
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                {nam.img} {nam.name}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderBottom: "2px solid RGB(48,48,48)" }}>
          <h3 style={{ color: "RGB(170,170,170)", margin: 15 }}>
            More From Youtube
          </h3>
          <div
            style={{ margin: 30, borderWidth: 5, borderBottomColor: "white" }}
          >
            {More.map((nam) => (
              <div style={{ display: "flex" }}>
                <div style={{ marginTop: 10 }}>{nam.icon}</div>

                <div style={{ color: "RGB(245,245,245)", margin: 10 }}>
                  {nam.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          borderBottom: "2px solid RGB(48,48,48)",
          borderTop: "2px solid RGB(48,48,48)",
        }}
        className="topbar"
      >
        <div
        
          style={{
            padding:10,
           overflow: scroll,
            display: "flex",
            borderWidth: 3,
            borderColor: "white",
            gap: "12px",
          }}
        >
          <button style={styles.categoryButton}>All</button>

          {new Array(30).fill(30).map(() => (
            <button style={styles.categoryButton}>Item</button>
          ))}
        </div>

      
      </div>
     
    </div>
  );
}
const sideItems = [
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 10V21H10V15H14V21H20V10L12 3L4 10Z" fill="white" />
      </svg>
    ),
    text: "Library",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.23 13.08C10.94 12.87 10.75 12.57 10.69 12.22C10.63 11.87 10.71 11.51 10.92 11.23C11.13 10.94 11.43 10.75 11.78 10.69C12.13 10.63 12.48 10.71 12.77 10.92C13.06 11.13 13.25 11.43 13.31 11.78C13.37 12.13 13.29 12.49 13.08 12.77C12.87 13.06 12.57 13.25 12.22 13.31C12.15 13.32 12.07 13.33 12 13.33C11.72 13.33 11.45 13.25 11.23 13.08ZM22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12ZM18.03 5.97L9.8 9.8L5.97 18.03L14.2 14.2L18.03 5.97Z"
          fill="white"
        />
      </svg>
    ),
    text: "Histoy",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 7H4V6H20V7ZM22 9V21H2V9H22ZM15 15L10 12V18L15 15ZM17 3H7V4H17V3Z"
          fill="white"
        />
      </svg>
    ),
    text: "Your Videos",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 20H18V21H3V6H4V20ZM21 3V18H6V3H21ZM17 10.5L11 7V14L17 10.5Z"
          fill="white"
        />
      </svg>
    ),
    text: "Watch later",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.97 16.95L10 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM12 2C8.73 2 5.8 3.44 4 5.83V3.02H2V9H8V7H5.62C7.08 5.09 9.36 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12H2C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2Z"
          fill="white"
        />
      </svg>
    ),
    text: "Liked Videos",
  },
  {
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 11H6V21H3V11ZM18.77 11H14.54L16.06 6.06C16.38 5.03 15.54 4 14.38 4C13.8 4 13.24 4.24 12.86 4.65L7 11V21H17.43C18.49 21 19.41 20.33 19.62 19.39L20.96 13.39C21.23 12.15 20.18 11 18.77 11Z"
          fill="white"
        />
      </svg>
    ),
    text: "Show Video",
  },
];
const Name = [
  {
    name: "James Gouse",
    img: (
      <img
        src="pfp.jpeg"
        style={{ width: 40, height: 40, borderRadius: 1000 }}
      />
    ),
  },
  {
    name: "Alan Cooper",
    img: (
      <img
        src="pfp.jpeg"
        style={{ width: 40, height: 40, borderRadius: 1000 }}
      />
    ),
  },
  {
    name: "Marcus Levin",
    img: (
      <img
        src="pfp.jpeg"
        style={{ width: 40, height: 40, borderRadius: 1000 }}
      />
    ),
  },
  {
    name: "Alexis Sears",
    img: (
      <img
        src="pfp.jpeg"
        style={{ width: 40, height: 40, borderRadius: 1000 }}
      />
    ),
  },
  {
    name: "Jesica Lambert",
    img: (
      <img
        src="pfp.jpeg"
        style={{ width: 40, height: 40, borderRadius: 1000 }}
      />
    ),
  },
  {
    name: "Anna White",
    img: (
      <img
        src="pfp.jpeg"
        style={{ width: 40, height: 40, borderRadius: 1000 }}
      />
    ),
  },
  {
    name: "Skylar Dias",
    img: (
      <img
        src="pfp.jpeg"
        style={{ width: 40, height: 40, borderRadius: 1000 }}
      />
    ),
  },
];
const More = [
  {
    icon: (
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.58 2.19C19.4656 1.76589 19.242 1.37921 18.9314 1.06861C18.6208 0.758008 18.2341 0.534356 17.81 0.42C16.25 8.9407e-08 9.99997 0 9.99997 0C9.99997 0 3.74997 8.9407e-08 2.18997 0.42C1.76586 0.534356 1.37919 0.758008 1.06858 1.06861C0.757982 1.37921 0.534329 1.76589 0.419974 2.19C0.130332 3.77673 -0.0102806 5.38708 -2.65368e-05 7C-0.0102806 8.61292 0.130332 10.2233 0.419974 11.81C0.534329 12.2341 0.757982 12.6208 1.06858 12.9314C1.37919 13.242 1.76586 13.4656 2.18997 13.58C3.74997 14 9.99997 14 9.99997 14C9.99997 14 16.25 14 17.81 13.58C18.2341 13.4656 18.6208 13.242 18.9314 12.9314C19.242 12.6208 19.4656 12.2341 19.58 11.81C19.8696 10.2233 20.0102 8.61292 20 7C20.0102 5.38708 19.8696 3.77673 19.58 2.19ZM7.99997 9.65V4.35L13 7L7.99997 9.65Z"
          fill="white"
        />
      </svg>
    ),
    text: "Youtube Premuim",
  },
  {
    icon: (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8H6V10H4V8H2V6H4V4H6V6H8V8ZM15 8.5C15 7.67 14.33 7 13.5 7C12.67 7 12 7.67 12 8.5C12 9.33 12.67 10 13.5 10C14.33 10 15 9.33 15 8.5ZM18 5.5C18 4.67 17.33 4 16.5 4C15.67 4 15 4.67 15 5.5C15 6.33 15.67 7 16.5 7C17.33 7 18 6.33 18 5.5ZM14.97 1.15L10.47 3.68L9.98 3.95L9.49 3.68L4.99 1.15L1 3.39V9.82L9.98 14.86L18.96 9.82V3.39L14.97 1.15ZM14.97 0L19.96 2.8V10.4L9.98 16L0 10.4V2.8L4.99 0L9.98 2.8L14.97 0Z"
          fill="white"
        />
      </svg>
    ),
    text: "Gaming",
  },

  {
    icon: (
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8H9V11H7V8H4V6H7V3H9V6H12V8ZM15 1H1V13H15V6.61L19 8.44V3.56L15 5.39V1ZM16 0V3.83L20 2V10L16 8.17V14H0V0H16Z"
          fill="white"
        />
      </svg>
    ),
    text: "Live",
  },
];
const Icon = [
  {
    icon: (
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 7V18H6V12H10V18H16V7L8 0L0 7Z" fill="white" />
      </svg>
    ),
    text: "Home",
  },

  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12ZM6.36 6.33001L4.95 4.92001C3.13 6.73001 2 9.24001 2 12C2 14.76 3.13 17.27 4.95 19.08L6.36 17.67C4.9 16.22 4 14.21 4 12C4 9.79001 4.9 7.78001 6.36 6.33001ZM19.05 4.92001L17.64 6.33001C19.1 7.78001 20 9.79001 20 12C20 14.21 19.1 16.22 17.64 17.67L19.05 19.08C20.87 17.27 22 14.76 22 12C22 9.24001 20.87 6.73001 19.05 4.92001ZM9.19 9.16001L7.77 7.75001C6.68 8.83001 6 10.34 6 12C6 13.66 6.68 15.17 7.77 16.25L9.18 14.84C8.46 14.11 8 13.11 8 12C8 10.89 8.46 9.89001 9.19 9.16001ZM16.23 7.75001L14.82 9.16001C15.54 9.89001 16 10.89 16 12C16 13.11 15.54 14.11 14.81 14.84L16.22 16.25C17.32 15.17 18 13.66 18 12C18 10.34 17.32 8.83001 16.23 7.75001Z"
          fill="white"
        />
      </svg>
    ),
    text: "Explore",
  },

  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 7H4V6H20V7ZM22 9V21H2V9H22ZM15 15L10 12V18L15 15ZM17 3H7V4H17V3Z"
          fill="white"
        />
      </svg>
    ),
    text: "Subscription",
  },
];
const styles = {
  categoryButton: {
    border: 0,
    color: "white",
    backgroundColor: "RGB(48,48,48)",
    borderRadius: 32,
    padding: "8px 12px",

    border: "0.3px solid #AAA",

    background: "#303030",
  },
};
