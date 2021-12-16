/* eslint-disable no-unused-vars */
import './App.css';
import { asyncGetCall } from "./utils/api";
import { useEffect, useState } from 'react';
import { UserCard } from './components';

export default function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const _res = await asyncGetCall();
        console.log(_res);
        if (_res) {
          setUserData(_res.results);
        }
        return true;
      }
      catch (error) {
        console.log(error);
        return false
      }
    })();
  }, []);

  return (
    <div>
      <div className="w-full flex items-center justify-center my-4">
        <img width={100} src="https://externship.github.in/orglogo/symblai-sq.png" alt="symblai-logo" />
        <img width={100} src="https://externship.github.in/orglogo/github.png" alt="github-logo" />
      </div>
      <h1 className="font-bold text-3xl my-4 text-center">GitHub Externship - Symbl.ai Submission - Question 3</h1>
      <p className="text-center px-2 my-4">The cards below are fetched from
        <span className="text-blue-500"><a href="https://randomuser.me/api/?inc=id,name,gender,dob,picture&nat=gb&results=10" target="_blank" rel="noopener noreferrer"> this </a></span>
        API and <span className="text-2xl font-bold">sorted in arranging order by age</span></p>
      <p className="text-center italic my-4">(Here, age is considered the ID as given in <span className="text-blue-500"><a href="https://drive.google.com/file/d/1psZ0X7snl2dW6o_PJjDgiYMRlBllfhXP/view" target="_blank" rel="noopener noreferrer">Example 2</a></span>)</p>
      {userData !== [] ? (
        userData.map((item) => {
          return (
            <UserCard
              key={item.id.value}
              fname={item.name.first}
              lname={item.name.last}
              gender={item.gender}
              age={item.dob.age}
              image={item.picture.medium}
            />
          )
        })
      ) : (
        <h1 className="text-center">Loading...</h1>
      )}
      <div className="w-full text-center my-16">
        Coded with ☕ and Submitted by <span className="text-blue-500"><a href="https://github.com/KG-1510" target="_blank" rel="noopener noreferrer">Kushagra Gupta</a></span><br></br>
        <span className="text-blue-500"><a href="https://github.com/KG-1510/github-externship-symblai-application" target="_blank" rel="noopener noreferrer">Link </a></span> to GitHub repository
      </div>
    </div>
  );
}
