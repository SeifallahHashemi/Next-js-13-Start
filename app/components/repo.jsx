import {FaStar, FaCodeBranch, FaEye} from "react-icons/fa"

const fetchRepo = async (name) => {
    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}`);
    const data = await response.json();

    return data;
}
const Repo = async ({ name }) => {
    const repo = await fetchRepo(name);

  return (
    <>
        <h2>{repo.name}</h2>
        <div className="card-stats">
            <div className="card-stat">
                <FaStar />
            <span>{repo.stargazers_count}</span>
                <FaCodeBranch />
                <span>{repo.forks_count}</span>
                <FaEye />
                <span>{repo.watchers_count}</span>
            </div>
        </div>
    </>
  )
}

export default Repo