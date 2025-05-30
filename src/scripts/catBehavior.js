console.log("Cat behavior script loaded!");

function initializeCatBehavior() {
  const catSvgObject = document.getElementById('cat-svg');
  if (catSvgObject) {
    catSvgObject.addEventListener('load', function() {
      console.log('Cat SVG fully loaded.');
      const svgDoc = catSvgObject.contentDocument;
      if (svgDoc) {
        console.log('Cat SVG Document:', svgDoc);
        // Future: Add logic to manipulate svgDoc.documentElement (the <svg> root)
        // For now, let's try to change the placeholder text color as a test
        const catText = svgDoc.querySelector('text');
        if (catText) {
          catText.style.fill = 'blue';
          console.log('Cat placeholder text color changed to blue.');
        } else {
          console.log('Could not find text element in SVG.');
        }
      } else {
        console.error('Could not access SVG document.');
      }
    });
    // Fallback if 'load' already fired or for browsers that don't consistently fire it for objects
    if (catSvgObject.contentDocument && catSvgObject.contentDocument.readyState === 'complete') {
         console.log('Cat SVG already loaded (detected via readyState).');
         const svgDoc = catSvgObject.contentDocument;
         if (svgDoc) {
             console.log('Cat SVG Document (already loaded):', svgDoc);
             const catText = svgDoc.querySelector('text');
             if (catText) {
                 catText.style.fill = 'purple'; // Different color for this path
                 console.log('Cat placeholder text color changed to purple.');
             } else {
                 console.log('Could not find text element in SVG (already loaded path).');
             }
         }
    }
  } else {
    console.error('Cat SVG object not found.');
  }
}

// Run initialization when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeCatBehavior);
} else {
  initializeCatBehavior(); // DOMContentLoaded has already fired
}
