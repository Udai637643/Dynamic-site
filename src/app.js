const express=require("express");
const app =express();
const hbs=require("hbs")
const mongoose=require("mongoose")
const port = process.env.PORT || 3000;
const routes=require("./routes/main")
const Detail=require("./models/Detail")
const Slider=require("./models/slider")
const Service=require("./models/service")
const bodyparser=require("body-parser")
const Banner=require("./models/Banner")
const Footer=require("./models/footer")
const Images=require("./models/images")
app.use(bodyparser.urlencoded({
  extended:true
}))
app.use('/static',express.static("public"))
app.use("",routes)


app.set('view engine','hbs')
app.set("views","views");
hbs.registerPartials("views/partials")
main().catch(err => console.log(err));


//db connection

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/dyanamic-site');
      console.log("db connect");

    //   Slider.create([
    //     {
    //     title:"this is mongo",
    //     subTitle:"this is subtitle",
    //     imageUrl:"/static/images/s1.jpg"
    //   },
    //   {
    //     title:"this is title",
    //     subTitle:"this is subtitle2",
    //     imageUrl:"/static/images/s2.jpg"
    //   },
    //   {
    //     title:"this is mango3",
    //     subTitle:"this is subtitle3",
    //     imageUrl:"/static/images/s3.jpg"
    //   }
    // ])


    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    // Detail.create({
    //     branchName:"Technical Univercity",
    //     branchIconUrl:"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         }
    //         ,
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us "
    //         },
    //     ]
    // })
    
// Service.create([
//   {
//   icon:"fa fa-envelope-open",
//   title:"Provide Best Courses",
//   description:"We provide courses that helps our studend in learning and in placement",
//   linkText:"Check",
//   link:"http://google.com"
// },
// {
//   icon:"fa fa-eercast",
//   title:"Provide Best Courses",
//   description:"We provide courses that helps our studend in learning and in placement",
//   linkText:"Check",
//   link:"http://google.com"
// },
// {
//   icon:"fa fa-superpowers",
//   title:"Provide Best Courses",
//   description:"We provide courses that helps our studend in learning and in placement",
//   linkText:"Check",
//   link:"http://google.com"
// },

// ])

// Banner.create({
//   texth1:"We work for people ,not for money",
//   textp1:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, beatae! Animi quidem repellat exercitationem vero, quod, et officiis neque numquam culpa distinctio expedita earum iusto iure sed, ipsum quia. Voluptas?",
//   urli1:"http://google.com",
//   urll1:"/static/images/g1.jpg",

//   texth2:"We work for people ,not for money",
//   textp2:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, beatae! Animi quidem repellat exercitationem vero, quod, et officiis neque numquam culpa distinctio expedita earum iusto iure sed, ipsum quia. Voluptas?",
//   urli2:"http://google.com",
//   urll2:"/static/images/g2.jpg"

// })



// footer

// Footer.create({
//   title:"Find Us",
//   textp:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//   connt:[
//     {
//      cclass:"fa fa-location-arrow",
//      ctext:"9878/25 sec 9 rohini 35 "
//   },
//   {
//     cclass:"fa fa-phone",
//     ctext:"6376432919 "
//  },
//  {
//   cclass:"fa fa fa-envelope",
//   ctext:"udai637643@gmail.com"
// },
// ],
// slink:[
//   {
//    sclass:"fab fa-facebook-f",
//    slink:"Udai Regar"
// },
// {
//   sclass:"fab fa-linkedin",
//   slink:"Udai Lal Regar"
// },
// {
//   sclass:"fab fa-instagram",
//   slink:"Udai Regar"
// },

// ]
// })
     

// Images.create({
//   urllink:[
//     {
//       link:"/static/images/1.jpg"
//   },
//   {
//     link:"/static/images/bg1.jpg"
// },
// {
//   link:"/static/images/i1.jpg"
// },
// {
//   link:"/static/images/i2.jpg"
// },
// {
//   link:"/static/images/i3.jpg"
// },
// {
//   link:"/static/images/i4.jpg"
// },
// {
//   link:"/static/images/i5.jpg"
// },
// {
//   link:"/static/images/i6.jpg"
// },
// {
//   link:"/static/images/i7.jpg"
// },
// {
//   link:"/static/images/i8.jpg"
// },
// {
//   link:"/static/images/i7.jpg"
// },


// ]
// })
}

app.listen(port,()=>{
    console.log("server started....");
});  