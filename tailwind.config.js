/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.html"],
  theme: {
    extend: {
      width: {
        sm: '435px',
        md: '768px',
        lg: '976px',
        xl: '1050px',
        'w-480': '120rem',
      },
      height: {
        'h-92.5': '23.125rem',
      },
      colors: {
        'primary': '#5f0080',
        'content': '#333333',
        'accent-yellow': '#fa622f',
        'light-gray-bg': '#E1E1E1',
        'light-gray-text': '#898989',
        'light-purple': '#2A0038',
        'gray-light': '#d3dce6',
      },
      fontSize: {
        10: '10px',
        21: '21px',
        22: '22px',
        28: '28px',
        38: '38px'
      },
      fontFamily: {
        'pretendard': ['"Pretendard Variable", Pretendard'],
      },
      backgroundImage: {
        'arrow-right': "url('/client/assets/icons/arrow2_1.svg')"
      },
      transformOrigin: {
        'ul': 'translate3d(0, 0, 5)'
      }
    },
  },
  plugins: [],
};