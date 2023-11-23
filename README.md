# 🔖 Ignite Shop

![image](https://user-images.githubusercontent.com/56702492/211023542-644beb80-8e36-4fd8-8aa9-305092a2dc4f.png)

![image](https://user-images.githubusercontent.com/56702492/211023600-d522ec24-6950-45d9-9141-f6b913215c0e.png)



# 🔧 Tecnologies

<p>This project was developed with the following tecnologies:</p>

- [React JS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Next](https://nextjs.org/)
- [Stitches](https://stitches.dev/)
- [Embla Carousel](https://www.embla-carousel.com/)
- [Stripe](https://stripe.com/br)


# 💡 About the project
<p>
The Ignite Shop is an e-commerce platform where you can choose the model of shirt that best suits you at a fair and adequate price, with payment via credit card.
 
In this application, the Next.js framework was used to build the front-end of the application and make calls to the Stripe API (a payment API) on the side of the SSR (Server Side Rendering) and also implemented the saving of page information via cache with updates managed via SSG (Static Site Generation) where the page can be accessed even with JavaScript disabled and having cached information that further anticipates the super fast loading of the page.

You can access the application by <a href="https://ignite-shop-alpha.vercel.app/">clicking here</a> and then you will be redirected to the application's Home page where you can choose a shirt model, when you click on the chosen shirt you will then be redirected to a purchase page or if you prefer click on the green cart beside the T-shirt price, the T-shirt will be added to the cart sidebar and there will a simple notification, in the cart button that opens the sidebar, signaling the T-shirt quantity, after that just click on the button below the T-shirts list and then you will be redirected to the payment area that is managed by the Stripe API and fill in fictitious data to simulate a purchase, at the end of the purchase you will be redirected to a purchase page where the shirt that was purchased and the name of the customer will be shown who made the purchase.

Example of dummy data that can be filled in the Stripe API to simulate a purchase:

![image](https://user-images.githubusercontent.com/56702492/210123036-dbb05e00-1ac9-475c-a96f-cbd6cc7a32ae.png)

PS: Remembering that this is an ecommerce application that simulates the purchase of shirts and that the purchase data is just fictitious just to simulate the purchase and is provided in the Stripe documentation that can be accessed by <a href="https://stripe.com/docs/testing">clicking here.</a>
</p>

![image](https://user-images.githubusercontent.com/56702492/211023896-1eaf62e9-e4a7-4013-bd01-9679e51eedf0.png)

# 🚀 Features

<ul>
  <li>Page to show T-shirts of different models</li>
  <li>Page to buy the product</li>
  <li>Payment via credit card</li>
  <li>Information stored in cache to improve the fast reload page</li>
  <li>Sidebar cart with a list of T-shirts that you chose to buy</li>
  <li>Animation loading while the data is being load from the server</li>
  <li>You can remove and add only one T-shirt model</li>
</ul>

# 💻 How to execute the GitHub-Blog on your machine

<p>Clone the project and access the project folder to execute the application:</p>

```bash
$ git clone <repository link of the project>

$ install the dependecies: run the command "npm i"
$ run "npm run dev"
```

The application will be open in http://localhost:3000 that is presented in your terminal, copy the link a paste into your browser and access.

# 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.
