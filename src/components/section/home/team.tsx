import { teamMembers } from "./team";

const Team = () => {
  return (
    <section className="my-lg-14 my-8 py-12 px-3 sm:px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Meet The Team
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={member.imageSrc}
                alt={member.name}
                className="w-full mb-4 rounded-lg object-cover object-center h-[18rem]"
              />
              <p className="text-gray-700 mb-4">{member.description}</p>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
