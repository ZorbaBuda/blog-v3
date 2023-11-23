'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";


export default function Search() {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('s', term);
    } else {
      params.delete('s');
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="relative flex flex-1 justify-center flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search {searchParams}
      </label>
      <input
        className="max-w-2xl peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={'Buscar por tags, categoria, resumen'}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('s')?.toString()}
      />
    </div>
  );
}