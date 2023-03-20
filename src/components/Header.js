import logo1 from '/Users/adrien/code/BobZiroll/meme-generator/src/troll-face.png';

export default function Header () {
  return (
    <div className="header">
      <div className='header--title'>
        <img src={logo1} alt="" className="header--pic"/>
        <h1>
          Meme Generator
        </h1>
      </div>


      <div className='header--infos'>
        <h4>
          React Course - Project 3
       </h4>
      </div>
    </div>
  )
}
