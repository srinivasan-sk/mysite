export default function decorate(block) {
    const magz = [...block.firstElementChild.children];
    block.classList.add(`magazine-${magz.length}-cols`);

  
    // setup image columns
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        const pic = col.querySelector('picture');
        const read = col.querySelector('p');
        if (pic) {
          const picWrapper = pic.closest('div');
          if (picWrapper && picWrapper.children.length === 1) {
            // picture is only content in column
            picWrapper.classList.add('magazine-img-col');
          }
        }
        if (read) {
            const readWrapper = read.closest('div:last-child');
            readWrapper.classList.add('btn_readmore');
        }
      });
    });

     // Add class to the last div inside p tags
     const paragraphs = block.querySelectorAll('p');
     paragraphs.forEach((p) => {
         const lastDiv = p.querySelector('div:last-child');
         if (lastDiv) {
             lastDiv.classList.add('btn_readmore');
         }
     });
}