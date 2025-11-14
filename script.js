document.addEventListener("DOMContentLoaded", () => {
    // --- 1. INITIALIZE SWIPER (WITH CORRECT NAVIGATION) ---
    const swiper = new Swiper('.swiper', {
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowTouchMove: true,
    });

    // --- 2. GET DOM ELEMENTS ---
    const addTextBtn = document.getElementById('add-text-btn');
    const fontFamilySelect = document.getElementById('font-family-select');
    const fontSizeInput = document.getElementById('font-size-input');
    const fontColorInput = document.getElementById('font-color-input');

    let selectedTextElement = null;

    // --- 3. "ADD TEXT" BUTTON LOGIC ---
    addTextBtn.addEventListener('click', () => {
        const newText = document.createElement('div');
        newText.classList.add('text-element');
        newText.textContent = 'Edit Me!';
        
        // Defaults to match the new theme
        newText.style.left = '50px';
        newText.style.top = '50px';
        newText.style.fontFamily = 'Poppins'; // New default font
        newText.style.fontSize = '24px'; // New default size
        newText.style.color = '#FFFFFF'; // Default to white

        const activeSlide = document.querySelector('.swiper-slide-active');
        activeSlide.appendChild(newText);

        makeDraggable(newText);
        addSelectListener(newText);
        addEditListeners(newText); // For double-click
        
        selectElement(newText); 
    });

    // --- 4. TEXT ELEMENT SELECTION LOGIC ---
    function selectElement(element) {
        if (selectedTextElement) {
            selectedTextElement.classList.remove('selected');
        }
        selectedTextElement = element;
        selectedTextElement.classList.add('selected');
        updateControls(selectedTextElement);
    }
    
    function addSelectListener(element) {
        element.addEventListener('click', (e) => {
            e.stopPropagation(); 
            selectElement(element);
        });
    }

    // --- 5. TEXT EDITING LOGIC (DOUBLE-CLICK) ---
    function addEditListeners(element) {
        element.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            element.setAttribute('contenteditable', 'true');
            element.style.cursor = 'text';
            element.focus();
        });

        element.addEventListener('blur', () => {
            element.setAttribute('contenteditable', 'false');
            element.style.cursor = 'move';
        });
    }

    // --- 6. CONTROLS LOGIC (UPDATING STYLE) ---
    fontFamilySelect.addEventListener('input', (e) => {
        if (selectedTextElement) {
            selectedTextElement.style.fontFamily = e.target.value;
        }
    });

    fontSizeInput.addEventListener('input', (e) => {
        if (selectedTextElement) {
            selectedTextElement.style.fontSize = e.target.value + 'px';
        }
    });

    fontColorInput.addEventListener('input', (e) => {
        if (selectedTextElement) {
            selectedTextElement.style.color = e.target.value;
        }
    });

    function updateControls(element) {
        fontFamilySelect.value = element.style.fontFamily;
        fontSizeInput.value = parseInt(element.style.fontSize, 10);
        fontColorInput.value = rgbToHex(element.style.color);
    }

    // --- 7. DRAGGABLE LOGIC (WITH BOUNDARIES) ---
    function makeDraggable(element) {
        element.addEventListener('mousedown', (e) => {
            if (element.getAttribute('contenteditable') === 'true') return;

            selectElement(element);
            e.preventDefault(); 

            const parent = element.parentElement;
            const parentRect = parent.getBoundingClientRect();
            let offsetX = e.clientX - element.getBoundingClientRect().left;
            let offsetY = e.clientY - element.getBoundingClientRect().top;

            function onMouseMove(e) {
                let newX = e.clientX - parentRect.left - offsetX;
                let newY = e.clientY - parentRect.top - offsetY;

                const elWidth = element.offsetWidth;
                const elHeight = element.offsetHeight;
                
                if (newX < 0) newX = 0;
                if (newY < 0) newY = 0;
                if (newX + elWidth > parentRect.width) newX = parentRect.width - elWidth;
                if (newY + elHeight > parentRect.height) newY = parentRect.height - elHeight;
                
                element.style.left = newX + 'px';
                element.style.top = newY + 'px';
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    }
    
    // --- 8. DESELECTION LOGIC ---
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.addEventListener('click', () => {
            if (selectedTextElement) {
                selectedTextElement.classList.remove('selected');
                selectedTextElement = null;
            }
        });
    });

    // --- 9. HELPER FUNCTION (RGB to Hex) ---
    function rgbToHex(rgb) {
        if (rgb.startsWith('#')) return rgb;

        let sep = rgb.indexOf(",") > -1 ? "," : " ";
        rgb = rgb.substr(4).split(")")[0].split(sep);

        let r = (+rgb[0]).toString(16),
            g = (+rgb[1]).toString(16),
            b = (+rgb[2]).toString(16);

        if (r.length == 1) r = "0" + r;
        if (g.length == 1) g = "0" + g;
        if (b.length == 1) b = "0" + b;

        return "#" + r + g + b;
    }
});