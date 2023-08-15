import LoadingSpinner from "@/app/components/loading-spinner";
import Repo from "@/app/components/repo";
import RepoDirs from "@/app/components/repo-dirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params }) => {
  const { repoId } = params;
  return (
    <div className="card">
      <Link href={"/code/repos"} className="btn btn-back">
        Back to Repositories
      </Link>
      <Suspense fallback={<h2 className="text-emerald-700">Loading...</h2>}>
        <Repo name={repoId} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <RepoDirs name={repoId} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
