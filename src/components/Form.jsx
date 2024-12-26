export default function Form() {
  return (
    <form>
      <div className="mt-10">
        <p className="text-neutral-50 mb-3 text-lg">Upload Avatar</p>
        <label
          htmlFor="file-input"
          className="h-40 cursor-pointer flex items-center p-4 bg-neutral-50/10 rounded-md border border-dashed border-neutral-50/70"
        >
          <i className="icon mr-2 w-10 h-10 bg-no-repeat bg-cover border rounded-xl p-5 block"></i>
          <span className="text-neutral-50 block">
            Drag and drop or click to upload
          </span>
        </label>
        <input id="file-input" type="file" className="hidden" />
      </div>

      <div className="mb-5 mt-5">
        <label className="text-neutral-50 text-lg ">
          Full Name
          <input
            className="w-full mt-3 p-3 rounded-xl border-neutral-50/70 border bg-neutral-50/10 text-neutral-50"
            type="text"
            name="fullName"
            required
          />
        </label>
      </div>
      <div className="mb-5">
        <label className="text-neutral-50 text-lg">
          Email:
          <input
            className="w-full mt-3 p-3 rounded-xl border-neutral-50/70 border bg-neutral-50/10 text-neutral-50"
            type="email"
            name="email"
            placeholder="example@email.com"
            required
          />
        </label>
      </div>
      <div className="mb-5">
        <label className="text-neutral-50 text-lg">
          GitHub Username:
          <input
            className="w-full mt-3 p-3 rounded-xl border-neutral-50/70 border bg-neutral-50/10 text-neutral-50"
            type="text"
            name="githubUsername"
            placeholder="@yourusername"
            required
          />
        </label>
      </div>
      <button
        className="text-lg font-bold bg-orange-500 w-full rounded-xl py-3"
        type="submit"
      >
        Generate My Ticket
      </button>
    </form>
  );
}
