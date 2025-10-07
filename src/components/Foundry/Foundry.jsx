//import env

export const Foundry = () => {

const foundryLink = import.meta.env.VITE_FOUNDRY_LINK;

   window.location.replace(foundryLink);


  return (
    <div>
      <div className="m-10 rounded-lg bg-white p-6">
        <h2 className="text-black mb-4">FoundryVTT Omdirigering</h2>
        <p className="text-black">
          Om du inte har blivit omdirigerad automatiskt, klicka på den här
          länken:{" "}
          <a className="" href={foundryLink}>
            FoundryVTT
          </a>
        </p>
      </div>
    </div>
  );
};
