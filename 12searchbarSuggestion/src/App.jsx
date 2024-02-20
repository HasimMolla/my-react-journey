import React, { useState, useEffect } from 'react'
import { XCircle } from 'lucide-react';
// import './App.css'

function App() {
  const fixedText = 'Search for ';
  const dynamicTexts = ['Laptop repair (at home)', 'Quick Book', 'Laotop', 'Desktp', 'Apple', 'Gadgets Repair', 'Upgrade Service'];
  const [TextIndex, setTextIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length)
    }, 1500)
    return () => clearInterval(intervalId)
  }, [dynamicTexts.length])

  const placeholderText = `${fixedText}'${dynamicTexts[TextIndex]}'`

  const [inputValue, setInputValue] = useState('');
  const [showClearButton, setShowClearButton] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const data = [
    { label: 'Apple', image: 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=600', phoneNumber: '918016151724' },
    { label: 'Banana', image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600', phoneNumber: '918016151724' },
    { label: 'Orange', image: 'https://images.pexels.com/photos/691166/pexels-photo-691166.jpeg?auto=compress&cs=tinysrgb&w=600', phoneNumber: '918016151724' },
    { label: 'Grapes', image: 'https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?auto=compress&cs=tinysrgb&w=600', phoneNumber: '918016151724' },
    { label: 'Cherry', image: 'https://images.pexels.com/photos/162689/cherry-pair-fruits-sweet-162689.jpeg?auto=compress&cs=tinysrgb&w=600', phoneNumber: '918016151724' },
    { label: 'Mango', image: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=600', phoneNumber: '918016151724' },
    { label: 'Pineapple', image: 'https://images.pexels.com/photos/137119/pexels-photo-137119.jpeg?auto=compress&cs=tinysrgb&w=600', phoneNumber: '918016151724' },
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setShowClearButton(value.length > 0);
    setShowSuggestions(value.length > 0);

    // Filter suggestions based on the input value
    const filteredSuggestions = data.filter(item =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleClearInput = () => {

    setInputValue('');
    setShowClearButton(false);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion.label);
    setShowClearButton(true);
    setShowSuggestions(false);
    setSuggestions([]);// Clear suggestions when a suggestion is selected
    const whatsappMessage = encodeURIComponent(`Hello, I'm interested in '${suggestion.label}'`);
    const whatsappUrl = `https://wa.me/${suggestion.phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');

  };





  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-start '>
        <div className="relative flex items-center mt-[20px] ">
          <svg className="absolute ml-3 w-[15px] lg:w-[18px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.23238 1.66666C8.05145 1.66664 6.88768 1.94942 5.83843 2.49133C4.78918 3.03324 3.88495 3.81853 3.20138 4.78151C2.51781 5.74449 2.07479 6.85716 1.90935 8.02645C1.74392 9.19573 1.8609 10.3876 2.2505 11.5024C2.6401 12.6173 3.29099 13.6226 4.14874 14.4343C5.00648 15.246 6.04612 15.8405 7.18071 16.1681C8.3153 16.4957 9.51183 16.5468 10.6702 16.3172C11.8286 16.0876 12.9152 15.5839 13.839 14.8483L17.0807 18.09L18.259 16.9108L15.0174 13.67C15.8844 12.5813 16.4267 11.2701 16.5818 9.88708C16.737 8.50403 16.4988 7.10526 15.8946 5.85154C15.2903 4.59782 14.3446 3.54003 13.1661 2.79974C11.9876 2.05945 10.6241 1.66671 9.23238 1.66666ZM3.50321 9.0625C3.50321 8.31013 3.6514 7.56513 3.93932 6.87004C4.22724 6.17494 4.64925 5.54337 5.18125 5.01136C5.71325 4.47936 6.34483 4.05736 7.03992 3.76944C7.73502 3.48152 8.48001 3.33333 9.23238 3.33333C9.98475 3.33333 10.7297 3.48152 11.4248 3.76944C12.1199 4.05736 12.7515 4.47936 13.2835 5.01136C13.8155 5.54337 14.2375 6.17494 14.5254 6.87004C14.8134 7.56513 14.9615 8.31013 14.9615 9.0625C14.9615 10.582 14.3579 12.0392 13.2835 13.1136C12.2091 14.1881 10.7518 14.7917 9.23238 14.7917C7.71291 14.7917 6.25567 14.1881 5.18125 13.1136C4.10682 12.0392 3.50321 10.582 3.50321 9.0625Z" fill="#545454" />
          </svg>
          <input type="text" onChange={handleInputChange} placeholder={placeholderText} className=' border-[1px]  border-[#101010] lg:border-[#000000] rounded-md py-[5px] outline-none pr-1 pl-10  placeholder:text-[#5b5b5b] placeholder:text-[14px] w-[280px] lg:w-[330px] lg:h-[40px]' />
          {showClearButton && (
            <span className="clear-icon " onClick={handleClearInput}>
              <XCircle />
            </span>
          )}
        </div>

        <div className=' rounded-lg px-[30px]  mt-[1px] w-[330px] max-h-[400px] overflow-y-auto bg-slate-100 shadow' >


          {(showSuggestions > 0 || suggestions.length > 0 || inputValue.length > 0) && (
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                  <div className="suggestion-item flex justify-start items-center gap-3 m-[10px] cursor-pointer">
                    <img src={suggestion.image} alt={suggestion.label} className="suggestion-image w-[100px] h-[70px] object-cover object-center rounded-lg" />
                    <span className="suggestion-text">{suggestion.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {
            showSuggestions > 0 && suggestions.length === 0 && inputValue.length > 0 && (
              <div className="no-suggestions flex flex-col items-center justify-center py-[20px] ">
                <img className='w-[80px] object-cover object-center' src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_72,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1651637589846-d39578.png" alt="" />
                <h1 className='text-[20px] font-[600] leading-[22px] py-[10px]'>No results found</h1>
                <div className='text-[13px] font-[400] leading-[16px] tracking-wide'>
                  We couldn’t find what you were looking for.
                  Please check your keywords again!
                </div>
              </div>
            )
          }



        </div>
      </div>
    </>
  )
}

export default App
