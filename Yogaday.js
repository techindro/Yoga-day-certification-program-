// Create a new HTML document
const doc = document.implementation.createHTMLDocument("Certificate of Completion");

// Set the title of the document
doc.title = "Certificate of Completion";

// Create a style element
const style = doc.createElement('style');
style.textContent = `
    body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: Georgia, serif;
        color: black;
        text-align: center;
        background-color: #f4f4f4;
    }
    .container {
        border: 20px solid tan;
        width: 80%;
        max-width: 700px;
        height: auto;
        margin: 30px auto;
        padding: 20px;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }
    .logo {
        margin-bottom: 20px;
    }
    .logo img {
        border-radius: 50%;
        width: 120px;
        height: 120px;
        object-fit: cover;
        border: 5px solid tan;
    }
    .logo div {
        color: tan;
        font-size: 28px;
        font-weight: bold;
        margin-top: 10px;
        text-transform: lowercase;
    }
    .marquee {
        color: tan;
        font-size: 36px;
        font-weight: bold;
        margin: 20px 0;
        text-transform: lowercase;
    }
    .assignment {
        margin: 15px 0;
        font-size: 20px;
    }
    .person {
        border-bottom: 2px solid black;
        font-size: 28px;
        font-style: italic;
        margin: 15px auto;
        width: 80%;
        max-width: 350px;
    }
    .reason {
        margin: 15px 0;
        font-size: 20px;
    }
`;

// Append the style to the document head
doc.head.appendChild(style);

// Create a container for the certificate
const certificateContainer = doc.createElement('div');
certificateContainer.className = 'container';

// Create logo section
const logoDiv = doc.createElement('div');
logoDiv.className = 'logo';
const logoImg = doc.createElement('img');
logoImg.src = 'https://i.postimg.cc/6q8tk6qM/yogaday.png';
logoImg.alt = 'Yoga Day Certificate';
const logoText = doc.createElement('div');
logoText.textContent = 'tech indro';
logoDiv.appendChild(logoImg);
logoDiv.appendChild(logoText);
certificateContainer.appendChild(logoDiv);

// Create marquee section
const marqueeDiv = doc.createElement('div');
marqueeDiv.className = 'marquee';
marqueeDiv.textContent = 'certificate of completion';
certificateContainer.appendChild(marqueeDiv);

// Create assignment section
const assignmentDiv = doc.createElement('div');
assignmentDiv.className = 'assignment';
assignmentDiv.textContent = 'this certificate is presented to';
certificateContainer.appendChild(assignmentDiv);

// Create person section
const personDiv = doc.createElement('div');
personDiv.className = 'person';
personDiv.textContent = 'Shishira Raghunath';
certificateContainer.appendChild(personDiv);

// Create reason section
const reasonDiv = doc.createElement('div');
reasonDiv.className = 'reason';
reasonDiv.innerHTML = 'for successfully completing the Yoga Session 2024<br>held by Tech Indro';
certificateContainer.appendChild(reasonDiv);

// Append the certificate to the body of the document
doc.body.appendChild(certificateContainer);

// Open the new document in a new window/tab
const newWindow = window.open();
newWindow.document.write(doc.documentElement.outerHTML);
newWindow.document.close();
