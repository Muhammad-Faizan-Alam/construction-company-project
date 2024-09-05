"use client";
// import React, { useState } from 'react';

// const Practice = () => {
//     const [backgroundImage, setBackgroundImage] = useState('url("https://imgs.search.brave.com/VcdEQ02oLqcy8gTZyx6erFbRE75Y2J_8aG22-ziNk4M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzIwLzM5LzA0/LzM2MF9GXzcyMDM5/MDQ5MF9leHdjMFF3/OE9rT0EwVTV0cXpo/b2YxYWZFQTRzWkta/Ui5qcGc")');

//     return (
//         <div className="flex w-full h-96 overflow-hidden">
//             <div
//                 className="flex-1 bg-cover bg-no-repeat bg-[left]"
//                 style={{ backgroundImage: backgroundImage }}
//                 onMouseEnter={() => setBackgroundImage('url("https://imgs.search.brave.com/VcdEQ02oLqcy8gTZyx6erFbRE75Y2J_8aG22-ziNk4M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzIwLzM5LzA0/LzM2MF9GXzcyMDM5/MDQ5MF9leHdjMFF3/OE9rT0EwVTV0cXpo/b2YxYWZFQTRzWkta/Ui5qcGc")')}
//             ></div>
//             <div
//                 className="flex-1 bg-cover bg-no-repeat bg-[center]"
//                 style={{ backgroundImage: backgroundImage }}
//                 onMouseEnter={() => setBackgroundImage('url("https://imgs.search.brave.com/O77Iw1UIF3cSbM5b1SFJsYSwDzHNTBvnivyNnDP0tHo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly8xYWRCcUs1TVFz/N290dXBJTkpZUE5k/dWNlbmM9LzE5OHgx/NzY6NzY1eDc0My9m/aXQtaW4vNTAweDUw/MC85OWRlc2lnbnMt/Y29udGVzdHMtYXR0/YWNobWVudHMvODEv/ODEwMzYvYXR0YWNo/bWVudF84MTAzNjg4/MA.jpeg")')}
//             ></div>
//             <div
//                 className="flex-1 bg-cover bg-no-repeat bg-[right]"
//                 style={{ backgroundImage: backgroundImage }}
//                 onMouseEnter={() => setBackgroundImage('url("https://imgs.search.brave.com/4ZQtgikIk9-VIlQb9RTa9JFYVWTaWr6ark60K88rImQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ncmVlbi1sb2dv/LXdpdGgtd2hpdGUt/bG9nby10aGF0LXNh/eXNob3UtZ3Jpc25v/bi1pdF8xMjg5NDcy/LTU5OC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw")')}
//             ></div>
//         </div>
//     );
// };

// export default Practice;

import React, { useState } from 'react';

const Practice = () => {
  const [bgImage, setBgImage] = useState('url(https://imgs.search.brave.com/R0sSLHMnicscCJbRuCVSToKMpA06qZgBkOjTlAuzfRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGVt/ZW50cy1yZXNpemVk/LmVudmF0b3VzZXJj/b250ZW50LmNvbS9l/bGVtZW50cy12aWRl/by1jb3Zlci1pbWFn/ZXMvZmlsZXMvMzE2/MDMxOTc1LzE5MjB4/MTA4MC5qcGc_dz01/MDAmaD0yODEmY2Zf/Zml0PWNvdmVyJnE9/ODUmZm9ybWF0PWF1/dG8mcz05MmUwYzA4/MmE4YmMyOGM2NGJi/MTk2MmNmMGQyZjg2/ODAyOGYxZjgyNmMz/ZmNmZWUyYTU2MjJj/Mjg4MmRlYmZj)');

  const handleHover = (imageUrl) => {
    setBgImage(`url(${imageUrl})`);
  };

  return (
    <div className="flex w-[70vw] h-[70vh] overflow-hidden">
      <div
        className="flex-1 bg-no-repeat bg-cover border transition-all duration-500"
        style={{ backgroundImage: bgImage, backgroundPosition: 'left', backgroundSize: '300%' }}
        onMouseEnter={() => handleHover('https://imgs.search.brave.com/bdtcuM1GCzuWoXuZWhyG-Aq2xw8O8K9z8ITycVNIg9c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQ0LzYxLzA4/LzM2MF9GXzI0NDYx/MDg1M19jTHB2bDl1/M1RIQ3BCNXdYYzdI/N04xVEtFU3VZblJm/Ri5qcGc')}
      ></div>
      <div
        className="flex-1 bg-no-repeat bg-cover border transition-all duration-500"
        style={{ backgroundImage: bgImage, backgroundPosition: 'center', backgroundSize: '300%' }}
        onMouseEnter={() => handleHover('https://imgs.search.brave.com/RAIcpHmuMDo-ACALHpl0_awWcP3xTuSF_opZDyhFRHs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzA2LzU5Lzk3/LzM2MF9GXzgwNjU5/OTc5MV8xc3owcHlp/dFBjc283bFFFSEIy/NVhXbFdZWHJLaDJu/US5qcGc')}
      ></div>
      <div
        className="flex-1 bg-no-repeat bg-cover border transition-all duration-500"
        style={{ backgroundImage: bgImage, backgroundPosition: 'right', backgroundSize: '300%' }}
        onMouseEnter={() => handleHover('https://imgs.search.brave.com/YPdDvIW_LP5K5SPkUMcb1ga7ZLlV1ohyWLInvMH50mA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzM3LzI3LzYx/LzM2MF9GXzQzNzI3/NjExMF9tQ1dQZmhp/TFlvUnhiZ3E1bFRa/Nm1WWXo1eWNPUjJL/My5qcGc')}
      ></div>
    </div>
  );
};

export default Practice;