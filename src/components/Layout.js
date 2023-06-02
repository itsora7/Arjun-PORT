import React from "react";

export const LayOut = ({ children }) => {
  return (
    <footer class="bg-dark flex text-light p-2 justify-between mt-3">
      <div>
        <h3> Arjun Kumar Shrestha</h3>
        <h4>www.arkshrestha.com</h4>
        <p>Copyright @ All right reserved by 👣Ark👣</p>
      </div>
      <div></div>

      <center>
        <h4>Thank You 🙏 Visit Again </h4>
        This site has been visited{" "}
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=8645474&style=0011&nbdigits=5&type=page&initCount=0"
          title="Free Counter"
          Alt="web counter"
          border="0"
        />{" "}
        "times"
      </center>
    </footer>
  );
};
