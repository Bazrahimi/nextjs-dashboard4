// import the Inter from the next/font/google module. this will be the primary font nad the specify the subset you would like to to load.

import {Inter, Lusitana} from 'next/font/google';

export const inter = Inter({subsets: ['latin']})


export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin']
})