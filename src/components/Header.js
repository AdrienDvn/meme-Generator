import logo1 from '/Users/adrien/code/BobZiroll/meme-generator/src/troll-face.png';

export default function Header () {
  return (
    <div className="header">

      <img src={logo1} alt="" className="header--pic"/>
      <h2 className='header--title'>
        Meme Generator
      </h2>
      <h4 className='header--infos'>
        React Course - Project 3
      </h4>

    </div>
  )
}
