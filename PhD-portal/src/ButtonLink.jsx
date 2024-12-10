import { Link } from 'react-router-dom';

function ButtonLink({ to, classname, children }) {
  return <Link to={to}><button className = {classname}>{children}</button></Link>;
}

export default ButtonLink;