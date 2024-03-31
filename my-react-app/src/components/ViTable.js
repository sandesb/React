import { Link } from "react-router-dom";
const ViTable = (props) => {
    return(
        <table>
        <tr>
            {
                props.header &&
                props.header.length > 0 &&
                props.header.map((user,index) => {
                   return(
                    <th key={index}>{user.name}</th>                    
                   ) 
                })
            }
         
          {props.actions && props.actions.length>0 && <th>Action</th>}
        </tr>

        { props.data && props.data.length > 0 && 
              props.data.map((user, index) => {
                return (
                  <tr key={index}>
                    {/* body starts */}
                    { props.header.map((header, index) => {
                      return (
                        <td key={index}>{user[header.key]}</td>
                      )
                    })}
                    {/* body ends */}

                    {/* action starts */}
                    { props?.actions && props.actions.length > 0 &&
                      <td>
                        {
                          props.actions.map((action, index) => {
                            return (
                                <Link to={`${action.link}/${user.id}`} className={action.className} key={index}>{action.name}</Link>
                            )
                          })
                        }
                      </td>
                    }
                    {/* action ends */}
                  </tr>
                )
              })
            }

        {/* {props.users.length>0 &&      
            props.users.map((user,index)=>{
                return(
                    <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                    <td>
            <Link to={`/pages/UserManagement/Detail/${user.id}/${user.username}`}> Detail </Link>

            <Link to={`/pages/AddUser/edit/${user.id}`}> Edit </Link>

            <Link className="red" to={`/pages/AddUser/delete/${user.id}`}>
            Delete
            </Link>
                   
                   
                    </td>
                    </tr>

                )
            })
        
        
        
} */}
{props.data && props.data.length === 0 && 
          <tr>
            <td colSpan={4}>No records found</td>
          </tr>
          }
        
        </table> 
    )
}

export default ViTable;