

const Footer = () => {
    return (
      <>
      <footer className="w-full py-3 bg-gray-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto">
                  <a href="/" className="flex justify-center ">
                  </a>
                      <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 pb-10 pt-7 mb-5 border-b border-white">
                           <li><a href="#" className="text-white hover:text-white">Community</a></li>
                          <li><a href="#" className=" text-white hover:text-white">Products</a></li>
                          <li><a href="#" className=" text-white hover:text-white">Resources</a></li>
                          <li><a href="#" className=" text-white hover:text-white">Blogs</a></li>
                          <li><a href="#" className=" text-white hover:text-white">Support</a></li>
                      </ul>
                      <div className="flex space-x-10 justify-center items-center mb-4">
                          <a href="https://x.com/__aakashsaini" target="_blank" className="block  text-white transition-all duration-500 hover:text-indigo-600 ">
                            <svg className="w-[1.688rem] h-[1.688rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                              <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="currentColor"/>
                            </svg>
                          </a>
                          <a href="https://www.linkedin.com/in/-aakashsaini/" target="_blank" className="block  text-white transition-all duration-500 hover:text-indigo-600 mt-2">
                          <i className="fa-brands fa-linkedin text-white hover:text-indigo-600 text-2xl"></i>
                                  
                          </a>
                          <a href="https://github.com/aakashsaini09/" target="_blank" className="block  text-white transition-all duration-500 hover:text-indigo-600 mt-2">
                          <i className="fa-brands fa-github text-white hover:text-indigo-600 text-2xl"></i>     
                          </a>
                          <a href="https://discordapp.com/users/1243529310351130704" target="_blank" className="block  text-white transition-all duration-500 hover:text-indigo-600 mt-2">
                          <i className="fa-brands fa-discord text-white hover:text-indigo-600 text-2xl"></i>     
                          </a>
                      </div>
                      <span className="text-sm text-gray-300 text-center block">©<span>Aakash Saini</span> 2024, All rights reserved.</span>
              </div>
          </div>
      </footer>
                                              
      </>
    )
  }
  
  export default Footer
  