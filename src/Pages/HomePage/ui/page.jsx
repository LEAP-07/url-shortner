import React from 'react'

const HomePage = () => {
  return (
    <div className= "">
    <h1 className="text-5xl text-center m-4" >URL Shortener</h1>


    <form className="w-full px-24 flex justify-center ">
    <div className="flex items-center border-b border-teal-500 py-2 w-full max-w-6xl ">
      <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none " type="text" placeholder="Your URL" aria-label="Long URL"/>
      <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
        Short
      </button>
    </div>
    </form>

    <div className="w-full flex-col  flex items-center justify-center">
        <input
          class="appearance-none block w-fit bg-transparent text-white border rounded py-3 px-4 leading-tight focus:outline-none  focus:border-blue-500 focus:border-2 m-8 text-center"  
          type="text"
          placeholder="Short URL"
          value="www.shortUrl/Ain6sj9"/>

        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
        Copy
      </button>
    </div>


{/*
        <button data-copy-to-clipboard-target="contact-details" data-copy-to-clipboard-content-type="textContent" data-tooltip-target="tooltip-contact-details" class="absolute end-2 top-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
                  <span id="default-icon-contact-details">
                      <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                      </svg>
                  </span>
                  <span id="success-icon-contact-details" class="hidden inline-flex items-center">
                      <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                  </span>
              </button>
              <div id="tooltip-contact-details" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  <span id="default-tooltip-message-contact-details">Copy to clipboard</span>
                  <span id="success-tooltip-message-contact-details" class="hidden">Copied!</span>
                  <div class="tooltip-arrow" data-popper-arrow></div>
              </div>

              ---------js----------
              const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'contact-details');
      const tooltip = FlowbiteInstances.getInstance('Tooltip', 'tooltip-contact-details');

      const $defaultIcon = document.getElementById('default-icon-contact-details');
      const $successIcon = document.getElementById('success-icon-contact-details');

      const $defaultTooltipMessage = document.getElementById('default-tooltip-message-contact-details');
      const $successTooltipMessage = document.getElementById('success-tooltip-message-contact-details');

      clipboard.updateOnCopyCallback((clipboard) => {
          showSuccess();

          // reset to default state
          setTimeout(() => {
              resetToDefault();
          }, 2000);
      })

      const showSuccess = () => {
          $defaultIcon.classList.add('hidden');
          $successIcon.classList.remove('hidden');
          $defaultTooltipMessage.classList.add('hidden');
          $successTooltipMessage.classList.remove('hidden');
          tooltip.show();
      }

      const resetToDefault = () => {
          $defaultIcon.classList.remove('hidden');
          $successIcon.classList.add('hidden');
          $defaultTooltipMessage.classList.remove('hidden');
          $successTooltipMessage.classList.add('hidden');
          tooltip.hide();
      }
*/}

    <div class="flex items-center justify-center ">
      <div className="border  rounded-lg mx-8 mt-8 overflow-y-auto w-[80vw] h-[60vh]">
        <div className="p-4">
          <div className=" relative mx-auto max-w-5xl rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
              <div className="bg-[#242424] p-7 rounded-md">
                  <h1 className="font-bold text-xl mb-2">shortUrl/Ain6sj9</h1>
                  <p>Original URL : <span className="truncate">https://notes.arkalim.org/notes/aws%20solutions%20architect%20associate/aws%20solutions%20architect%20associate%20(saa-c02)/#disaster-recovery</span></p>
              </div>
          </div>
        </div>
        <div className="p-4">
          <div className=" relative mx-auto max-w-5xl rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
              <div className="bg-[#242424] p-7 rounded-md">
                  <h1 className="font-bold text-xl mb-2">shortUrl/Ain6sj9</h1>
                  <p>Original URL : <span className="truncate">https://notes.arkalim.org/notes/aws%20solutions%20architect%20associate/aws%20solutions%20architect%20associate%20(saa-c02)/#disaster-recovery</span></p>
              </div>
          </div>
        </div>
        <div className="p-4">
          <div className=" relative mx-auto max-w-5xl rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
              <div className="bg-[#242424] p-7 rounded-md">
                  <h1 className="font-bold text-xl mb-2">shortUrl/Ain6sj9</h1>
                  <p>Original URL : <span className="truncate">https://notes.arkalim.org/notes/aws%20solutions%20architect%20associate/aws%20solutions%20architect%20associate%20(saa-c02)/#disaster-recovery</span></p>
              </div>
          </div>
        </div>
        <div className="p-4">
          <div className=" relative mx-auto max-w-5xl rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
              <div className="bg-[#242424] p-7 rounded-md">
                  <h1 className="font-bold text-xl mb-2">shortUrl/Ain6sj9</h1>
                  <p>Original URL : <span className="truncate">https://notes.arkalim.org/notes/aws%20solutions%20architect%20associate/aws%20solutions%20architect%20associate%20(saa-c02)/#disaster-recovery</span></p>
              </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default HomePage