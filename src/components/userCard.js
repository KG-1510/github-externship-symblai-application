export default function UserCard(values) {
    return (
        <>
            <div className="py-6 flex flex-col justify-center sm:py-12">
                <div className="flex space-x-4 px-4 justify-around">
                    <div className="bg-gradient-to-t from-black via-pink-900 to-pink-700 w-full h-48 md:w-96 rounded-xl md:rounded-3xl shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">
                        <img
                            className="rounded-full w-20 h-20 shadow-sm absolute -top-8 transform md:scale-110 duration-700"
                            src={values.image}
                            alt="user-img"
                        />
                        {/* TEXTS */}
                        <div className="transform md:rotate-0 align-middle w-full text-lg font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8">
                            {values.fname} {" "} {values.lname} <span className="font-extrabold text-3xl"> Age: {values.age}</span>
                        </div>
                        <ul className="text-lg w-full text-center text-gray-300 font-light mt-2">
                            <li>{values.gender === "male" ? "🚹 Male" : "🚺 Female"}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}