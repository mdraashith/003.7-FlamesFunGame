import {useState} from "react";
import {Box,Button,TextField,Typography,Modal} from "@mui/material";

function App() {
  const [name1,setName1]=useState("");
  const [name2,setName2]=useState("");
  const [result,setResult]=useState("");
  const [open,setOpen]=useState(false);

  const flamesStructure={
        F: "🤝 Friends 🤝",
        L: "❤️ Love ❤️",
        A: "😍 Affection 😍",
        M: "💍 Marriage 💍",
        E: "💔 Enemy 🥀",
        S: "👧 Siblings 👧",
  };

    const nameComparison=()=>{

       if (!name1.trim() || !name2.trim()) {
          setResult("Please enter both names");
          return;
        }
        else
        {
        
        const n1arr=name1.toUpperCase().replace(/\s/g, "").split("");
        const n2arr=name2.toUpperCase().replace(/\s/g, "").split("");

        for(let i=0;i<n1arr.length;i++)
        {
          let index=n2arr.indexOf(n1arr[i]);
          if(index!==-1){
            n1arr.splice(i,1);
            n2arr.splice(index,1);
          }
        }

        const countingletter=(n1arr.join("")+n2arr.join("")).length;

        const flames=["F","L","A","M","E","S"];

        let index=0;

        while(flames.length>1){
          index=(index+countingletter-1)% flames.length; 
          flames.splice(index,1);
        }
        setResult(flamesStructure[flames[0]]);
        setOpen(true);
      }
  };
  return (
    <>
    <Box
      sx={{
        minHeight: "100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        backgroundImage:'url(./img/bg.png)',
        backgroundRepeat:"no-repeat",
        // paddingBottom:"2rem"
      }}
    >
        <Box
          sx={{
            width:"30rem",
            padding:"30px",
            height:"20rem",
            borderRadius:"15px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around",
            alignItems:"center",
            
            "&:hover": {
                background: "linear-gradient(to right, #c0158d, #667eea)",        
                 transform: "scale(1.05)",
                 transition: "0.3s ease"
            }
        }}
      >
        <Typography variant="h4" sx={{fontWeight:"bolder",color:" #163ad6",fontFamily:"fangsong",fontSize:"3rem"}}>
          Flames Game
        </Typography>

        <TextField
          label="Your Name"
          variant="outlined"
          sx={{width:"30rem"}}
          onChange={(e)=>setName1(e.target.value)}
        />

        <TextField


          label="Partner Name"
          variant="outlined"
          sx={{width:"30rem"}}
          onChange={(e)=>setName2(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #ff416c, #ff4b2b)",
            fontWeight:"bolder",
            fontSize:"1rem",
            borderRadius:"10px",
          }}
          onClick={nameComparison}
        >
          Check Relationship
        </Button>
      </Box>

      <Modal open={open} onClose={()=>setOpen(false)}>
              <Box
                  sx={{
                    margin:"auto",
                    marginTop:"17rem",
                    width:"25em",
                    height:"15rem",
                    border:"1px solid black",
                    backgroundImage:'url(/cv.png)',
                    backgroundRepeat:"no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius:"15px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    gap:"1rem"
                  }}
                >
                  
                  <Typography variant="h1" sx={{fontWeight:"bolder",color:"#ec0404",fontFamily:"fangsong",fontSize:"3rem",paddingTop:"2rem"}}>{result}</Typography>
                  <Button
                      variant="outlined"
                      sx={{background: "linear-gradient(to right, #c0158d, #667eea)",fontSize:"2rem",fontWeight:"bolder",width:"8rem",height:"2.5rem",borderRadius:"10px",color:"#67bf1a"}}
                      onClick={()=>setOpen(false)}
                  >Close</Button>
              </Box>
      </Modal>
    </Box>
    </>
  )
}

export default App;
