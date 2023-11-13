import React from "react";
import { Container } from "@/components/layouts/Container";
import { FaHome } from "react-icons/fa";
import { BsFillTagsFill } from "react-icons/bs";

// var tele = document.getElementById('teleporter'),
//   rec = document.getElementById('receiver');

// window.onresize = resize;
// resize();

// function resize() {
//         const rChildren = rec.children;
//         let numW = 0;
        
//         [...rChildren].forEach(item => {
//           item.outHTML = '';
//           tele.appendChild(item);
//         })  

//         const teleW = tele.offsetWidth,
//           tChildren = tele.children;

//         [...tChildren].forEach(item => {
//           numW += item.offsetWidth;

//           if (numW > teleW) {
//             item.outHTML = '';
//             rec.appendChild(item);
//           }
//         });
//       }


export default function page() {
  
  return (
    <Container>
       <div className="flex  items-center ">
         
         <FaHome />
      
       <div className="">Primal Ideas</div>
     </div>

     <div className="flex  items-center">
            <BsFillTagsFill />
             <div className="ml-3">Etiquetas:</div>
          </div>

      <div className="flex flex-col">
        <ul className=" list-none gap-x-6  flex-nowrap inline-flex overflow-hidden" id="teleporter">
          <li>List item 0</li>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
          <li>List item 4</li>
          <li>List item 5</li>
          <li>List item 6</li>
          <li>List item 7</li>
          <li>List item 8</li>
          <li>List item 9</li>
          <li>List item 10</li>
          <li>List item 11</li>
          <li>List item 12</li>
          <li>List item 13</li>
        </ul>
        <div>
          More:
          <ul id="receiver"></ul>
        </div>
      </div>
    </Container>
  );
}
