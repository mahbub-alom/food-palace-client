import React from "react";
import useAuth from "../../../Hooks/useAuth";

const User = () => {
  const { users } = useAuth();
  console.log(users);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Creation Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={users?.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{users?.displayName}</td>
              <td>{users?.email}</td>
              <td>{users?.metadata.creationTime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
