import { useState } from "react";
import { Box, Button, TextField, Typography, Modal } from "@mui/material";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");
  const [open, setOpen] = useState(false);

  const flamesStructure = {
    F: "🤝 Friends 🤝",
    L: "❤️ Love ❤️",
    A: "😍 Affection 😍",
    M: "💍 Marriage 💍",
    E: "💔 Enemy 🥀",
    S: "👧 Siblings 👧",
  };

  const nameComparison = () => {

    if (!name1.trim() || !name2.trim()) {
      setResult("Please enter both names");
      return;
    }
    else {

      const n1arr = name1.toUpperCase().replace(/\s/g, "").split("");
      const n2arr = name2.toUpperCase().replace(/\s/g, "").split("");

      for (let i = 0; i < n1arr.length; i++) {
        let index = n2arr.indexOf(n1arr[i]);
        if (index !== -1) {
          n1arr.splice(i, 1);
          n2arr.splice(index, 1);
        }
      }

      const countingletter = (n1arr.join("") + n2arr.join("")).length;

      const flames = ["F", "L", "A", "M", "E", "S"];

      let index = 0;

      while (flames.length > 1) {
        index = (index + countingletter - 1) % flames.length;
        flames.splice(index, 1);
      }
      setResult(flamesStructure[flames[0]]);
      setOpen(true);
    }
  };
  return (
    <>
      <Box
        sx={{
            minHeight:{
      xs:"120vh",
      md:"100vh"
    },
          display: "flex",
          justifyContent:{
            xs:"center",
            md:"center"
          },
          alignItems: "center",
          textAlign: "center",
          backgroundImage: 'url(./img/bg.png)',
          backgroundRepeat: "no-repeat",
          backgroundSize:{
   xs:"100% auto",
   sm:"cover"
},
          backgroundPosition: "center",
          overflow:"hidden",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "80%",
              sm: "25rem",
              md: "30rem"
            },
            padding: {
              xs: "0.7rem",
              md: "1.5rem"
            },
            minHeight: {
              xs: "13rem",
              md: "18rem"
            },
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(1px)",
            background: "rgba(255,255,255,0.1)",
            boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
            gap: "0.7rem",
            "&:hover": {
              background: "linear-gradient(to right, #c0158d, #667eea)",
              transform: "scale(1.05)",
              transition: "0.3s ease"
            }
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bolder", color: " #163ad6", fontFamily: "fangsong", fontSize: { xs: "1.2rem", md: "3rem" } }}>
            Flames Game
          </Typography>

          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setName1(e.target.value)}
          />

          <TextField


            label="Partner Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setName2(e.target.value)}
          />

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #ff416c, #ff4b2b)",
              fontWeight: "bolder",
              fontSize: {
                xs: "0.7rem",
                md: "1rem"
              },
              borderRadius: "10px",
              width: {
                xs: "100%",
                sm: "auto"
              },
              "&:hover": {
                transform: "scale(1.05)",
                transition: "0.3s"
              }
            }}
            onClick={nameComparison}
          >
            Check Relationship
          </Button>
        </Box>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform:
                "translate(-50%,-50%)",
              width: {
                xs: "75%",
                sm: "25rem"
              },
              minHeight: {
                xs: "8rem",
                md: "15rem"
              },
              border:"1px solid black",
              backgroundImage:'url(./img/cv.png)',
              backgroundRepeat:"no-repeat",
              backgroundSize:"100% 100%",
              backgroundPosition:"center",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem",
            }}
          >

            <Typography variant="h1" sx={{ fontWeight: "bolder", color: "#ec0404", fontFamily: "fangsong", fontSize: {
                  xs: "1.7rem",
                  md: "3rem"
                }, paddingTop: "2rem" }}>{result}</Typography>
            <Button
              variant="outlined"
              sx={{ background: "linear-gradient(to right, #c0158d, #667eea)", fontSize: {
                  xs: "1rem",
                  md: "1.5rem"
                }, fontWeight: "bolder",width: {
                  xs: "6rem",
                  md: "8rem"
                }, height: {
                  md: "3rem"
                },borderRadius: "10px", color: "#67bf1a", "&:hover": {

                  transform: "scale(1.05)",

                  transition: "0.3s"
                }}}
              onClick={() => setOpen(false)}
            >Close</Button>
          </Box>
        </Modal>
      </Box>
    </>
  )
}

export default App;
