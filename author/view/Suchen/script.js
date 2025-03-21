let selectedImage = null;
let resizingImage = null;
let rotatingImage = null;
let startAngle = 0;
let startRotation = 0;

function addImage(src) {
    const imageElement = document.createElement('div');
    imageElement.classList.add('image');
    imageElement.style.width = '50px';
    imageElement.style.height = '50px';
    imageElement.style.left = '0px';
    imageElement.style.top = '0px';
    imageElement.dataset.rotation = 0;

    const img = document.createElement('img');
    img.src = src;
    img.style.width = '100%';
    img.style.height = '100%';
    imageElement.appendChild(img);

    const resizeHandle = document.createElement('div');
    resizeHandle.classList.add('resize-handle');
    imageElement.appendChild(resizeHandle);

    const rotateHandle = document.createElement('div');
    rotateHandle.classList.add('rotate-handle');
    imageElement.appendChild(rotateHandle);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'X';
    removeButton.onclick = () => imageElement.remove();
    imageElement.appendChild(removeButton);

    document.getElementById('blueprint').appendChild(imageElement);

    imageElement.addEventListener('mousedown', startDragging);
    resizeHandle.addEventListener('mousedown', startResizing);
    rotateHandle.addEventListener('mousedown', startRotating);
}

function startDragging(event) {
    event.preventDefault();
    selectedImage = event.target.closest('.image');
    selectedImage.startX = event.clientX;
    selectedImage.startY = event.clientY;
    selectedImage.startLeft = parseInt(selectedImage.style.left, 10);
    selectedImage.startTop = parseInt(selectedImage.style.top, 10);
    document.addEventListener('mousemove', dragImage);
    document.addEventListener('mouseup', stopDragging);
}

function dragImage(event) {
    if (!selectedImage) return;
    const dx = event.clientX - selectedImage.startX;
    const dy = event.clientY - selectedImage.startY;
    selectedImage.style.left = `${selectedImage.startLeft + dx}px`;
    selectedImage.style.top = `${selectedImage.startTop + dy}px`;
}

function stopDragging() {
    selectedImage = null;
    document.removeEventListener('mousemove', dragImage);
    document.removeEventListener('mouseup', stopDragging);
}

function startResizing(event) {
    event.preventDefault();
    event.stopPropagation();
    resizingImage = event.target.closest('.image');
    resizingImage.startWidth = resizingImage.offsetWidth;
    resizingImage.startHeight = resizingImage.offsetHeight;
    resizingImage.startX = event.clientX;
    resizingImage.startY = event.clientY;
    document.addEventListener('mousemove', resizeImage);
    document.addEventListener('mouseup', stopResizing);
}

function resizeImage(event) {
    if (!resizingImage) return;
    const dx = event.clientX - resizingImage.startX;
    const dy = event.clientY - resizingImage.startY;
    resizingImage.style.width = `${resizingImage.startWidth + dx}px`;
    resizingImage.style.height = `${resizingImage.startHeight + dy}px`;
}

function stopResizing() {
    resizingImage = null;
    document.removeEventListener('mousemove', resizeImage);
    document.removeEventListener('mouseup', stopResizing);
}

function startRotating(event) {
    event.preventDefault();
    event.stopPropagation();
    rotatingImage = event.target.closest('.image');
    rotatingImage.startX = event.clientX;
    rotatingImage.startY = event.clientY;
    startAngle = Math.atan2(rotatingImage.startY - rotatingImage.getBoundingClientRect().top - rotatingImage.offsetHeight / 2, rotatingImage.startX - rotatingImage.getBoundingClientRect().left - rotatingImage.offsetWidth / 2);
    startRotation = parseFloat(rotatingImage.dataset.rotation) || 0;
    document.addEventListener('mousemove', rotateImage);
    document.addEventListener('mouseup', stopRotating);
}

function rotateImage(event) {
    if (!rotatingImage) return;
    const currentX = event.clientX;
    const currentY = event.clientY;
    const currentAngle = Math.atan2(currentY - rotatingImage.getBoundingClientRect().top - rotatingImage.offsetHeight / 2, currentX - rotatingImage.getBoundingClientRect().left - rotatingImage.offsetWidth / 2);
    const deltaAngle = currentAngle - startAngle;
    const rotation = startRotation + deltaAngle;
    rotatingImage.style.transform = `rotate(${rotation}rad)`;
    rotatingImage.dataset.rotation = rotation;
}

function stopRotating() {
    rotatingImage = null;
    document.removeEventListener('mousemove', rotateImage);
    document.removeEventListener('mouseup', stopRotating);
}

function removeAllImages() {
    const blueprint = document.getElementById('blueprint');
    while (blueprint.firstChild) {
        blueprint.firstChild.remove();
    }
}

function downloadCanvas(format) {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const blueprint = document.getElementById('blueprint');
    const blueprintRect = blueprint.getBoundingClientRect();
    canvas.width = blueprintRect.width;
    canvas.height = blueprintRect.height;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = getComputedStyle(blueprint).backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const images = blueprint.getElementsByClassName('image');
    for (let image of images) {
        const img = image.getElementsByTagName('img')[0];
        const rect = image.getBoundingClientRect();
        const rotation = parseFloat(image.dataset.rotation) || 0;
        context.save();
        context.translate(rect.left + rect.width / 2 - blueprintRect.left, rect.top + rect.height / 2 - blueprintRect.top);
        context.rotate(rotation);
        context.drawImage(img, -rect.width / 2, -rect.height / 2, rect.width, rect.height);
        context.restore();
    }

    const link = document.createElement('a');
    link.download = `blueprint.${format}`;
    link.href = canvas.toDataURL(`image/${format}`);
    link.click();
}

function designBlueprint() {
    const length = document.getElementById('length').value;
    const breadth = document.getElementById('breadth').value;
    const cellSize = 50; // each cell is 50 pixels
    const width = length * cellSize;
    const height = breadth * cellSize;
    const area = length * breadth;


    const blueprintContainer = document.getElementById('blueprint-container');
    blueprintContainer.style.width = `${width}px`;
    blueprintContainer.style.height = `${height}px`;

    const blueprint = document.getElementById('blueprint');
    blueprint.style.width = '100%';
    blueprint.style.height = '100%';

    blueprint.style.backgroundSize = `${cellSize}px ${cellSize}px`;

    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = `<p>Total area is ${area} sq. ft.</p>`;
}
function setFloorBackground(src) {
    const blueprint = document.getElementById('blueprint');
    blueprint.style.backgroundImage = `url(${src})`;
}

function toggleDrainage() {
    const blueprint = document.getElementById('blueprint');
    const isChecked = document.getElementById('drainageToggle').checked;
    blueprint.style.outline = isChecked ? '5px solid red' : 'none';
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const dropdownContent = button.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
});
