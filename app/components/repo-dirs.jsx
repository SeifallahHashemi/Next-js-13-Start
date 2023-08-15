import Link from "next/link";

const fetchRepoContents = async (name) => {
    const response = await fetch(`https://api.github.com/repos/bradtraversy/${name}/contents`);
    await new Promise(resolve => setTimeout(resolve, 3000))
    const contents = await response.json();

    return contents;
}

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name);
    const filteredDirs = contents.filter(content => content.type === 'dir')
  return (
    <>
        <ul>
            {filteredDirs?.map((dir) => (
                <li key={dir.path}>
                    <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default RepoDirs