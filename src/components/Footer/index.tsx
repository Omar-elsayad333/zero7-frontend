import style from './footer.module.css'
import logo from 'assets/images/logo_gold.png'

// MUI
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
    return (
        <div className={`${style.container} grid`}>
            <div className={style.topSection}>
                <div className={style.listContainer}>
                    <Typography variant='h5' color={'primary'}>
                        CORPORATE INFO
                    </Typography>
                    <ul className={style.list}>
                        <li>
                            <Typography variant='h6' color={'secondary'}>
                                Returns & Refunds
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='h6' color={'secondary'}>
                                Privacy Policy
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='h6' color={'secondary'}>
                                Website Terms & Conditions
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='h6' color={'secondary'}>
                                About Us
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='h6' color={'secondary'}>
                                Delivery Information
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='h6' color={'secondary'}>
                                Terms And Conditions Of Sale
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div className={style.listContainer}>
                    <Typography variant='h5' color={'primary'}>
                        CUSTOMER SERVICE                    
                    </Typography>
                    <ul className={style.list}>
                        <li>
                            <Typography variant='h6' color={'secondary'}>
                                Help
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='h6' color={'secondary'}>
                                Sitemap
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='h6' color={'secondary'}>
                                Stores
                            </Typography>
                        </li>
                        <li>
                            <Typography variant='h6' color={'secondary'}>
                                EGift Cards
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div className={style.listContainer}>
                    <Typography variant='h5' color={'primary'}>
                        NEWSLETTER
                    </Typography>
                    <ul className={style.list}>
                        <li>
                            <Typography variant='h6' color={'secondary'} maxWidth={245}>
                                be the first to know about Zero7 newest arrivals, special offers and store events near you.
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.bottomSection}>
                <img src={logo} width={150} alt='zero 7' />
                <div className={style.socialIcons}>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9167 11.0124C17.9167 6.38193 14.1857 2.62817 9.58333 2.62817C4.98096 2.62817 1.25 6.38193 1.25 11.0124C1.25 15.1972 4.29736 18.6659 8.28125 19.2948V13.436H6.16536V11.0124H8.28125V9.16528C8.28125 7.06397 9.52539 5.90328 11.4289 5.90328C12.3403 5.90328 13.2943 6.06703 13.2943 6.06703V8.13034H12.2435C11.2083 8.13034 10.8854 8.77669 10.8854 9.44039V11.0124H13.1966L12.8271 13.436H10.8854V19.2948C14.8693 18.6659 17.9167 15.1972 17.9167 11.0124Z" fill="#D1AE6F"/>
                    </svg>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_60_315)">
                            <path d="M10 2.57007C12.6719 2.57007 12.9883 2.58179 14.0391 2.62866C15.0156 2.67163 15.543 2.83569 15.8945 2.97241C16.3594 3.1521 16.6953 3.37085 17.043 3.71851C17.3945 4.07007 17.6094 4.4021 17.7891 4.86694C17.9258 5.21851 18.0898 5.74976 18.1328 6.72241C18.1797 7.7771 18.1914 8.09351 18.1914 10.7615C18.1914 13.4334 18.1797 13.7498 18.1328 14.8005C18.0898 15.7771 17.9258 16.3044 17.7891 16.656C17.6094 17.1209 17.3906 17.4568 17.043 17.8044C16.6914 18.156 16.3594 18.3709 15.8945 18.5505C15.543 18.6873 15.0117 18.8513 14.0391 18.8943C12.9844 18.9412 12.668 18.9529 10 18.9529C7.32813 18.9529 7.01172 18.9412 5.96094 18.8943C4.98438 18.8513 4.45703 18.6873 4.10547 18.5505C3.64063 18.3709 3.30469 18.1521 2.95703 17.8044C2.60547 17.4529 2.39063 17.1209 2.21094 16.656C2.07422 16.3044 1.91016 15.7732 1.86719 14.8005C1.82031 13.7459 1.80859 13.4294 1.80859 10.7615C1.80859 8.0896 1.82031 7.77319 1.86719 6.72241C1.91016 5.74585 2.07422 5.21851 2.21094 4.86694C2.39063 4.4021 2.60938 4.06616 2.95703 3.71851C3.30859 3.36694 3.64063 3.1521 4.10547 2.97241C4.45703 2.83569 4.98828 2.67163 5.96094 2.62866C7.01172 2.58179 7.32813 2.57007 10 2.57007ZM10 0.769287C7.28516 0.769287 6.94531 0.781006 5.87891 0.827881C4.81641 0.874756 4.08594 1.04663 3.45313 1.29272C2.79297 1.55054 2.23438 1.89038 1.67969 2.44897C1.12109 3.00366 0.78125 3.56226 0.523438 4.21851C0.277344 4.85523 0.105469 5.58179 0.0585938 6.64429C0.0117188 7.7146 0 8.05444 0 10.7693C0 13.4841 0.0117188 13.824 0.0585938 14.8904C0.105469 15.9529 0.277344 16.6834 0.523438 17.3162C0.78125 17.9763 1.12109 18.5349 1.67969 19.0896C2.23438 19.6443 2.79297 19.988 3.44922 20.2419C4.08594 20.488 4.8125 20.6599 5.875 20.7068C6.94141 20.7537 7.28125 20.7654 9.99609 20.7654C12.7109 20.7654 13.0508 20.7537 14.1172 20.7068C15.1797 20.6599 15.9102 20.488 16.543 20.2419C17.1992 19.988 17.7578 19.6443 18.3125 19.0896C18.8672 18.5349 19.2109 17.9763 19.4648 17.3201C19.7109 16.6834 19.8828 15.9568 19.9297 14.8943C19.9766 13.8279 19.9883 13.488 19.9883 10.7732C19.9883 8.05835 19.9766 7.71851 19.9297 6.6521C19.8828 5.5896 19.7109 4.85913 19.4648 4.22632C19.2188 3.56226 18.8789 3.00366 18.3203 2.44897C17.7656 1.89429 17.207 1.55054 16.5508 1.29663C15.9141 1.05054 15.1875 0.878662 14.125 0.831787C13.0547 0.781006 12.7148 0.769287 10 0.769287Z" fill="#D1AE6F"/>
                            <path d="M10 5.63257C7.16406 5.63257 4.86328 7.93335 4.86328 10.7693C4.86328 13.6052 7.16406 15.906 10 15.906C12.8359 15.906 15.1367 13.6052 15.1367 10.7693C15.1367 7.93335 12.8359 5.63257 10 5.63257ZM10 14.1013C8.16016 14.1013 6.66797 12.6091 6.66797 10.7693C6.66797 8.92944 8.16016 7.43726 10 7.43726C11.8398 7.43726 13.332 8.92944 13.332 10.7693C13.332 12.6091 11.8398 14.1013 10 14.1013Z" fill="#D1AE6F"/>
                            <path d="M16.5391 5.42944C16.5391 6.09351 16 6.62866 15.3398 6.62866C14.6758 6.62866 14.1406 6.0896 14.1406 5.42944C14.1406 4.76538 14.6797 4.23022 15.3398 4.23022C16 4.23022 16.5391 4.76929 16.5391 5.42944Z" fill="#D1AE6F"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_60_315">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.769287)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_60_316)">
                                <path d="M6.2918 18.8944C13.8371 18.8944 17.9652 12.6417 17.9652 7.22096C17.9652 7.04518 17.9613 6.86549 17.9535 6.68971C18.7566 6.10896 19.4496 5.38962 20 4.56549C19.2521 4.89824 18.458 5.11556 17.6449 5.21002C18.5011 4.69683 19.1421 3.89064 19.4492 2.94088C18.6438 3.41821 17.763 3.75492 16.8445 3.93658C16.2257 3.27904 15.4075 2.84367 14.5164 2.69779C13.6253 2.5519 12.711 2.70362 11.9148 3.12949C11.1186 3.55536 10.4848 4.23166 10.1115 5.05384C9.73825 5.87601 9.64619 6.79825 9.84961 7.67799C8.21874 7.59615 6.62328 7.1725 5.16665 6.43449C3.71002 5.69649 2.42474 4.66061 1.39414 3.39401C0.870333 4.29711 0.710047 5.36578 0.945859 6.38282C1.18167 7.39986 1.79589 8.28895 2.66367 8.8694C2.01219 8.84871 1.37498 8.67331 0.804688 8.35768V8.40846C0.804104 9.3562 1.13175 10.2749 1.73192 11.0084C2.3321 11.7419 3.16777 12.2449 4.09687 12.4319C3.49338 12.597 2.85999 12.6211 2.2457 12.5022C2.50788 13.3173 3.01798 14.0302 3.70481 14.5414C4.39164 15.0526 5.22093 15.3366 6.07695 15.3538C4.62369 16.4953 2.82848 17.1145 0.980469 17.1116C0.652739 17.1111 0.325333 17.091 0 17.0514C1.87738 18.2559 4.06128 18.8956 6.2918 18.8944Z" fill="#D1AE6F"/>
                            </g>
                        <defs>
                            <clipPath id="clip0_60_316">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.769287)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <Typography variant='h6' color={'secondary'} maxWidth={670} textAlign={'center'}> 
                    © Zero7's business concept is to offer fashion and quality at the
                    best price in a sustainable way. Zero7 has since it was founded in
                    2020 grown into one of the world's leading fashion companies. The 
                    content of this site is copyright-protected and is the property of 
                    Zero7 Mohamed & Omar AB.
                </Typography>
                <Typography variant='h6' color={'secondary'}>
                    Egypt
                </Typography>
            </div>
        </div>
    );
}
 
export default Footer;