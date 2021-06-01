const nodemailer = require('nodemailer');

// Mail template
const generateOrderEmail = ({ order, total }) => `
    <div>
      <h2>Yor recent order for ${total} </h2>
      <p>Please start walking over, we will have your order ready in the next 20 mins</p>
      <ul style="list-style:none;">
        ${order
          .map(
            (item) => `
          <li>
            <img src="${item.thumbnail}" alt="${item.name}"/>
            ${item.size} ${item.name} - ${item.price}
          </li>
        `
          )
          .join('')}
      </ul>
      <p>Your total is <strong>$${total}</strong> due at pickup</p>
    </div>
  `;

// Mail transport
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'della.connelly76@ethereal.email',
    pass: 'K6E2yQqMEvrDcGY92M',
  },
});

exports.handler = async (event, ctx) => {
  const requestBody = JSON.parse(event.body);
  const requiredFields = ['email', 'name', 'order'];

  // check required fields
  for (const field of requiredFields) {
    if (!requestBody[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field`,
        }),
      };
    }
  }

  const { name, email, order, total } = requestBody;

  const info = await transporter.sendMail({
    from: 'Slick`s slices',
    to: `${name} <${email}>`,
    subject: 'Order',
    html: generateOrderEmail({ order, total }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
