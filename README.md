<p align="center">
        <img width="100" src="https://externship.github.in/orglogo/symblai-sq.png" />
        <img width="100" src="https://externship.github.in/orglogo/github.png" />
</p>

<h1 align="center">
  Github Externship - Symbl.ai Submission
</h1>

<h2 align="center">
    🔧 Technologies Used
    <br></br>
    <p align="center">
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
        <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
        <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" />
        <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
        <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
    </p>
</h2>

<br></br>

<h4>
  👉 Question 1 - Write down the steps for making a Peanut Butter-Jelly sandwich. Assume your audience has never heard of Peanut Butter-Jelly sandwiches. 
</h4>

Click [here](https://docs.google.com/document/d/1f37f1LPgP_-3DyW3HMi9nFnCKOgd3EBxI5bnER4uAHY/edit?usp=sharing) to read the answer for Question 1.

<br></br>

<h4>
  👉 Question 2 - Assume you have an endpoint (Example 1 below) that returns a JSON output (Example 2) when a GET request is performed and write a code snippet in Python and Javascript that performs a GET request to the Example 1 endpoint and loops through the JSON output from Example 2. Print the `name` and `id` fields, sorting by the `id` field.
</h4>

Javascript Code:
```
const asyncGetCall = async () => { // asynchronous API call
    try {
        const response = await fetch('https://randomuser.me/api/?inc=id,name,gender,dob,picture&nat=gb&results=10', // using fetch API to make GET request
            {
                method: 'GET',
            });
        let data = await response.json();
        console.log(data); // storing JSON format response in data and printing as output

        // sort the results array by age in an ascending order (IMP: here age is taken as ID given in Example 2)
        if (data) {
            data.results.sort((a, b) => {
                return a.dob.age - b.dob.age
            });
        }

        // iterate through the array and print the name and age in ascending order
        if (data) {
            data.results.forEach((e) => {
                console.log(`${e.name.first} ${e.name.last} ${e.dob.age}`);
            });
        }
    } catch (error) {
        console.log(error) // log errors
    }
}


asyncGetCall(); // to call and run the above function
```

Python Code:
```
# import necessary modules
import requests

# use requests module to make API call
response = requests.get("https://randomuser.me/api/?inc=id,name,gender,dob,picture&nat=gb&results=10")

# convert dato to JSON
data = response.json()
lis = data['results']
print("The list printed sorting by age: ")

# using lambda function and sorted() function sort the array by age (IMP: here age is taken as ID given in Example 2)
sorted_lis = sorted(lis, key = lambda i : i['dob']['age'])

# print the sorted list
for i in sorted_lis:
    print(i['name']['first'], " ", i['name']['last'], " ", i['dob']['age'])

```

✨ BONUS POINTS: cURL code:
```
curl --location --request GET 'https://randomuser.me/api/?inc=id,name,gender,dob,picture&nat=gb&results=10'
```

<br></br>

<h4>
  👉 Question 3 - Integrate the code from Question 1 into a ReactJS application and display the `id` and `name` field on the page as HTML. Use CSS to make it look nice. Upload code to Github or any other site of your choosing. 
</h4>

Click [https://angry-bohr-e14ba2.netlify.app/](https://angry-bohr-e14ba2.netlify.app/) to view the deployed site on Netlify. <br></br>
Click [https://github.com/KG-1510/github-externship-symblai-application](https://github.com/KG-1510/github-externship-symblai-application) for the code.

<h1 align="center">
  Submitted By
</h1>

<table align="center">
<tr align="center">
<td>

  Kushagra Gupta

  <p align="center">
  <img src = "https://avatars.githubusercontent.com/u/60519359?v=4"  height="120" alt="Kushagra Gupta">
  </p>
  <p align="center">
  <a href = "https://github.com/KG-1510"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
  <a href = "https://www.linkedin.com/in/kg1510/">
  <img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/>
  </a>
  </p>
</td>

</table>
</tr>
</table>

