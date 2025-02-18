import GlobalSvgSelector from '../../source/GlobalSvgSelector';
import s from './Footer.module.css';

function Footer(){
   return (
      <>
         <footer className={s.footer}>
            <div className={s.footer_inner}>
               <div className={s.footer_item}>
                  <h6 className={s.title}>About Us</h6>
                  <ul className={s.list}>
                     <li className={s.text}>Who we are</li>
                     <li className={s.text}>Our stores</li>
                     <li className={s.text}>Customer Reviews</li>
                  </ul>
               </div>
               <div className={s.footer_item}>
                  <h6 className={s.title}>Categories</h6>
                  <ul className={s.list}>
                     <li className={s.text}>Women fashion</li>
                     <li className={s.text}>Accessories</li>
                     <li className={s.text}>Kids</li>
                  </ul>
               </div>
               <div className={s.footer_item}>
                  <h6 className={s.title}>Help</h6>
                  <ul className={s.list}>
                     <li className={s.text}>Customer service</li>
                     <li className={s.text}>Size guide</li>
                     <li className={s.text}>Contact us</li>
                  </ul>
               </div>
               <div className={s.footer_item}>
                  <h6 className={s.title}>Payments & Delivery</h6>
                  <ul className={s.list}>
                     <li className={s.text}>Purchase terms</li>
                     <li className={s.text}>Guarantee</li>
                  </ul>
               </div>
               <div className={s.footer_item}>
                  <h6 className={s.title}>Social</h6>
                  <ul className={s.list}>
                     <li className={s.social_icon}>
                        <a href="#"><GlobalSvgSelector id='instagram' /></a>
                        <a href="#"><GlobalSvgSelector id='twitter' /></a>
                        <a href="#"><GlobalSvgSelector id='snapchat' /></a>
                        <a href="#"><GlobalSvgSelector id='facebook' /></a>
                        <a href="#"><GlobalSvgSelector id='youtube' /></a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className={s.copy_right}>
               <p>© Copyright, Aurora 2021. All Rights reserved.</p>
            </div>
         </footer>
      </>
   )
}

export default Footer