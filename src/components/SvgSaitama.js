import React, { useEffect, useState } from 'react'
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
} from "framer-motion";

export const SvgSaitama = () => {
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
    const [offsetY, setOffSetY] = useState(0)
    const handleScroll = () => setOffSetY(window.pageYOffset)

     
    useEffect(() => {
      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll)
    },[])

    return (
        <div className="svg-container" style={{textAlign:"start"}}>
            <svg layout version="1.0" xmlns="http://www.w3.org/2000/svg" 
            scaleX="-1"
            style={{minWidth:"400px", width:"40%", height:"40%", transform:`translateX(${offsetY * 0.05-150}px) scaleX(-1)`}}
            viewBox="0 0 450.000000 400.000000" preserveAspectRatio="xMidYMid meet">
                <motion.g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} 
                
                    d="M1994 3888 c-140 -143 -191 -205 -281 -341 -88 -133 -176 -310 -233
-472 -37 -104 -49 -127 -90 -169 -54 -54 -101 -142 -125 -231 -20 -78 -19
-222 2 -310 13 -51 16 -96 13 -165 -9 -166 -4 -513 8 -575 6 -33 17 -86 23
-117 l13 -56 -36 -40 c-20 -22 -41 -50 -48 -61 -8 -16 -15 -19 -28 -12 -45 23
-114 40 -143 34 -19 -3 -56 -29 -94 -64 -34 -33 -70 -59 -78 -59 -33 0 -128
-42 -209 -93 -72 -46 -88 -52 -114 -45 -53 14 -137 4 -172 -22 -45 -33 -140
-155 -168 -215 -26 -55 -31 -128 -13 -199 10 -39 8 -46 -15 -81 -15 -21 -29
-49 -32 -62 -4 -13 -10 -23 -14 -23 -4 0 -13 -21 -20 -47 -7 -27 -16 -52 -19
-58 -3 -5 -6 -14 -7 -20 -1 -5 -19 -92 -40 -192 -32 -158 -38 -210 -20 -192 3
2 14 54 26 114 33 171 69 303 101 380 27 63 65 124 72 114 2 -2 16 -38 31 -79
39 -102 103 -226 177 -340 66 -103 135 -190 150 -190 5 0 -12 26 -38 58 -147
180 -305 497 -335 673 -11 66 -11 68 20 131 37 76 131 192 172 213 31 16 136
20 159 6 10 -7 7 -14 -17 -31 -17 -12 -32 -30 -35 -40 -5 -20 9 -332 22 -490
12 -152 60 -235 158 -277 47 -19 131 -16 183 8 47 21 195 163 265 254 34 44
120 145 373 437 19 21 29 38 24 38 -18 0 -318 -343 -394 -450 -26 -36 -55 -74
-66 -83 -19 -17 -19 -16 1 40 14 43 18 74 14 122 -7 86 -41 135 -126 178 -53
28 -73 33 -129 33 -45 0 -81 -7 -110 -20 -61 -27 -137 -109 -160 -172 -19 -52
-20 -52 -26 -22 -4 17 -7 95 -8 175 -1 79 -5 152 -10 161 -15 30 15 84 71 132
73 62 218 135 281 143 27 3 48 9 47 14 -4 16 85 98 118 109 27 9 43 7 91 -11
33 -12 60 -23 62 -24 2 -2 -10 -30 -27 -64 -53 -105 -135 -320 -113 -296 5 6
22 44 37 85 42 115 120 268 170 335 25 33 49 61 53 63 4 1 15 -26 25 -61 25
-85 94 -222 150 -295 61 -78 157 -166 224 -204 l55 -31 -43 -35 c-131 -105
-268 -265 -466 -545 -58 -81 -127 -172 -155 -202 -27 -30 -45 -55 -40 -55 15
0 96 92 161 184 l56 78 7 -91 c7 -91 25 -177 34 -168 3 3 0 33 -6 66 -6 34
-11 100 -11 146 l0 85 72 97 c99 134 225 278 298 342 33 29 61 49 61 44 1 -4
9 2 20 15 17 20 19 21 24 5 39 -137 39 -347 0 -448 -5 -12 -4 -16 4 -12 18 12
42 141 42 226 0 71 -19 201 -35 242 -5 12 10 10 78 -13 349 -116 806 7 1226
332 l90 70 -7 -53 c-4 -28 -6 -100 -5 -159 6 -444 7 -427 -21 -613 -15 -99
-32 -185 -39 -191 -33 -30 -153 -128 -189 -154 -23 -17 -35 -30 -27 -30 14 0
172 123 198 153 24 30 28 18 15 -50 -7 -38 -13 -77 -13 -88 1 -52 20 32 48
210 48 307 54 386 48 650 -7 289 -3 324 46 373 36 36 38 36 117 37 l80 0 10
-35 c28 -95 42 -238 36 -365 -8 -189 -29 -308 -126 -709 -22 -93 -38 -171 -35
-174 3 -3 6 -3 8 -1 2 2 28 112 60 244 56 240 90 415 102 533 l7 62 61 -32
c71 -38 108 -86 149 -189 44 -110 50 -116 183 -179 67 -31 157 -80 202 -108
130 -84 233 -206 257 -305 9 -40 30 -35 22 6 -18 89 -106 210 -211 287 -64 47
-169 107 -265 150 -116 53 -125 61 -159 152 -18 44 -45 99 -61 121 -29 39
-106 101 -140 112 -14 5 -18 25 -23 128 -6 103 -21 203 -41 276 -3 12 17 26
77 55 207 100 467 451 498 674 14 99 -2 162 -54 210 l-25 24 25 66 c106 278
146 479 144 733 -3 314 -62 524 -214 748 -61 91 -193 231 -218 231 -12 0 7
-25 59 -78 165 -167 274 -372 328 -617 21 -96 29 -358 15 -470 -24 -188 -78
-397 -142 -550 l-29 -70 -43 0 c-43 0 -127 -31 -127 -46 0 -4 19 1 43 11 52
24 134 26 166 4 74 -52 67 -213 -15 -376 -108 -215 -275 -396 -443 -483 -43
-22 -145 -36 -196 -26 -38 7 -43 5 -98 -45 -84 -77 -249 -198 -355 -261 -489
-288 -966 -297 -1265 -23 -151 139 -251 337 -304 605 -26 130 -26 572 0 730
99 598 211 927 423 1246 84 126 230 296 328 382 63 55 73 67 54 67 -16 0 -56
-33 -134 -112z m-575 -1043 c-27 -97 -85 -373 -100 -475 l-13 -85 -12 65 c-18
92 -17 263 1 335 9 32 28 80 42 107 26 47 92 132 98 126 2 -2 -5 -35 -16 -73z
m-491 -2048 c114 -30 172 -102 172 -215 0 -95 -30 -162 -109 -242 -56 -57 -76
-71 -125 -85 -87 -25 -151 -8 -216 57 -50 49 -70 102 -70 183 0 162 127 306
275 314 11 1 44 -5 73 -12z"  className="svg-elem-1"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M773 741 c-43 -20 -99 -85 -109 -128 -4 -13 -3 -34 0 -48 16 -62 136
-6 184 87 22 44 23 47 8 77 -19 36 -27 37 -83 12z m75 -28 c4 -29 -18 -70 -64
-116 -62 -62 -122 -64 -110 -4 18 89 164 190 174 120z"  className="svg-elem-2"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M938 600 c-102 -32 -200 -149 -214 -254 -6 -39 -3 -48 19 -70 14 -14
31 -26 38 -26 6 0 0 9 -15 21 -60 47 -19 173 85 262 51 44 128 71 164 57 33
-12 44 -37 40 -90 -2 -31 0 -39 5 -25 14 34 11 82 -7 104 -20 24 -74 34 -115
21z"  className="svg-elem-3"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M1028 425 c-10 -13 -18 -27 -18 -32 0 -9 -74 -81 -110 -106 l-25 -17
30 14 c46 22 158 147 143 161 -2 2 -11 -7 -20 -20z"  className="svg-elem-4"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M2178 3932 c-95 -95 -120 -164 -78 -210 41 -43 161 -20 285 54 71 43
178 150 193 193 15 43 8 39 -22 -13 -67 -114 -273 -245 -388 -246 -43 0 -78
27 -78 60 0 47 74 143 154 202 28 20 34 28 20 28 -10 -1 -49 -31 -86 -68z"  className="svg-elem-5"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M1800 3321 c-21 -4 39 -9 145 -13 179 -5 231 -14 349 -63 13 -6 17
-5 13 3 -11 17 -156 61 -237 72 -84 10 -217 11 -270 1z"  className="svg-elem-6"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M2875 3164 c213 -39 404 -120 560 -240 26 -19 49 -33 52 -30 8 8
-114 93 -203 142 -139 75 -357 145 -449 143 -31 -1 -21 -4 40 -15z"  className="svg-elem-7"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M1775 3023 c-53 -13 -75 -77 -55 -154 45 -166 336 -214 458 -75 81
92 2 178 -202 221 -72 14 -159 18 -201 8z m250 -32 c84 -24 149 -63 165 -100
19 -47 -11 -98 -79 -133 -45 -24 -66 -28 -131 -28 -161 0 -250 68 -250 193 0
59 15 81 60 90 41 8 168 -4 235 -22z"  className="svg-elem-8"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M1931 2926 c-16 -19 -7 -46 14 -46 22 0 30 29 13 46 -13 13 -16 13
-27 0z"  className="svg-elem-9"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M2326 2979 c-2 -8 -14 -57 -25 -109 -27 -120 -95 -277 -198 -453
l-81 -138 17 -62 16 -62 5 90 c6 88 7 92 63 185 65 107 136 250 161 325 20 64
56 228 51 234 -3 2 -6 -2 -9 -10z"  className="svg-elem-10"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M2731 2807 c-34 -20 -50 -55 -51 -111 -1 -175 238 -315 430 -251 67
22 140 90 140 130 0 70 -90 145 -245 203 -105 40 -232 53 -274 29z m169 -11
c181 -38 340 -143 340 -223 0 -33 -83 -101 -148 -119 -195 -57 -423 99 -397
272 12 79 68 99 205 70z"  className="svg-elem-11"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M2914 2675 c-4 -9 -2 -21 4 -27 15 -15 44 -1 40 19 -4 23 -36 29 -44
8z"  className="svg-elem-12"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M2145 2170 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6
0 -7 -4 -4 -10z"  className="svg-elem-13"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M3875 2031 c-60 -27 -156 -104 -207 -163 -36 -43 -46 -63 -50 -102
-6 -54 -29 -91 -75 -121 -31 -20 -69 -82 -58 -93 23 -23 187 119 201 174 3 13
10 24 14 24 10 0 -8 70 -23 89 -9 11 1 25 46 67 32 29 66 58 77 64 17 9 20 8
20 -10 0 -12 -7 -35 -16 -51 -8 -17 -13 -33 -10 -36 7 -8 34 49 41 90 6 31 15
42 46 57 55 28 61 25 36 -17 -18 -32 -22 -53 -22 -138 0 -79 -4 -107 -17 -128
-10 -14 -18 -32 -18 -39 0 -8 -14 -30 -31 -51 -42 -52 -30 -58 18 -10 81 81
157 259 151 356 l-3 52 -40 3 c-23 1 -57 -6 -80 -17z m107 -48 c-4 -80 -71
-269 -102 -288 -15 -9 -12 1 10 45 16 31 20 59 20 130 0 102 25 175 58 168 14
-3 16 -13 14 -55z m-308 -159 c9 -23 7 -69 -3 -97 -18 -46 -132 -157 -162
-157 -19 0 15 47 52 73 43 30 69 78 69 127 0 29 18 70 31 70 4 0 10 -7 13 -16z"  className="svg-elem-14"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M1797 1878 c22 -117 87 -209 181 -255 52 -26 67 -28 167 -28 122 0
193 18 293 76 79 45 59 44 -33 -2 -199 -98 -393 -88 -506 27 -51 52 -48 66 19
100 40 21 45 21 90 7 126 -38 489 -99 505 -84 4 4 -55 15 -130 25 -281 36
-403 70 -585 164 -4 2 -5 -11 -1 -30z m77 -25 l55 -27 -37 -23 c-45 -27 -48
-28 -57 -5 -10 24 -24 82 -19 82 2 0 28 -12 58 -27z"  className="svg-elem-15"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M3704 1854 c3 -9 6 -32 7 -52 0 -34 1 -35 10 -13 11 28 3 81 -13 81
-6 0 -7 -7 -4 -16z"  className="svg-elem-16"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M3605 1485 c-21 -10 -51 -13 -101 -8 -54 4 -77 2 -102 -11 -43 -22
-40 -27 6 -10 25 9 61 11 112 7 66 -5 78 -3 100 15 29 25 26 26 -15 7z"  className="svg-elem-17"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M3190 1271 c-193 -194 -366 -305 -596 -380 -175 -57 -287 -74 -494
-75 -107 0 -160 -3 -135 -8 49 -9 253 -11 315 -3 88 12 205 36 272 56 232 69
481 223 675 418 l92 93 26 -21 c36 -27 100 -35 155 -18 l45 14 -72 -5 c-74 -5
-115 9 -136 45 -4 7 -11 12 -15 12 -4 -1 -63 -59 -132 -128z"  className="svg-elem-18"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M1011 1290 c-1 -3 -4 -32 -7 -65 -3 -33 -10 -64 -16 -70 -6 -7 -9 -5
-8 5 5 31 0 60 -10 60 -6 0 -7 -17 -4 -42 3 -24 1 -88 -5 -142 -6 -54 -10
-101 -7 -103 11 -11 47 117 57 200 9 74 9 178 0 157z"  className="svg-elem-19"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M3360 1247 c0 -9 7 -36 14 -59 27 -79 38 -142 40 -241 4 -116 -3
-147 -82 -383 -34 -99 -65 -198 -70 -220 -6 -21 -17 -66 -26 -99 -14 -51 -56
-233 -56 -242 0 -2 4 -3 8 -3 5 0 14 26 21 58 34 156 78 316 141 507 38 116
74 239 80 275 15 82 6 183 -26 308 -24 92 -44 137 -44 99z"  className="svg-elem-20"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M1412 1003 c-56 -112 -168 -308 -232 -403 -51 -77 -57 -89 -27 -60
62 60 323 520 315 555 -2 9 -27 -32 -56 -92z"  className="svg-elem-21"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M454 993 c8 -79 41 -221 62 -266 l15 -32 -6 30 c-43 199 -55 261 -55
295 0 23 -5 40 -11 40 -8 0 -9 -20 -5 -67z"  className="svg-elem-22"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M1611 802 c-142 -226 -229 -371 -214 -357 23 23 283 425 283 438 0
21 -21 -3 -69 -81z"  className="svg-elem-23"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M570 868 c0 -17 68 -108 81 -108 14 0 10 17 -8 31 -9 8 -29 32 -45
53 -15 21 -28 32 -28 24z"  className="svg-elem-24"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M3150 793 c-14 -9 -27 -19 -30 -22 -15 -17 -127 -96 -205 -146 -119
-74 -269 -146 -387 -183 -124 -40 -134 -42 -258 -47 -165 -7 -262 30 -363 138
-39 43 -45 46 -33 21 19 -39 92 -107 145 -133 202 -104 517 -42 876 169 83 49
278 191 290 210 9 15 -8 12 -35 -7z"  className="svg-elem-25"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M1732 753 c-33 -47 -88 -164 -107 -228 -27 -89 -26 -231 3 -322 22
-72 95 -193 121 -201 8 -3 -2 17 -22 43 -80 105 -112 212 -105 351 7 108 33
193 93 298 45 79 55 112 17 59z"  className="svg-elem-26"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M3697 480 c-22 -81 -67 -284 -64 -287 6 -5 45 136 53 192 6 43 8 46
16 26 10 -27 0 -121 -13 -121 -4 0 -13 -19 -19 -42 -7 -23 -32 -86 -56 -141
-24 -55 -42 -102 -39 -105 5 -6 76 143 94 199 6 20 20 53 31 74 21 41 25 104
11 185 -7 39 -9 42 -14 20z"  className="svg-elem-27"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M1110 90 c-52 -50 -89 -90 -81 -90 7 0 37 24 66 53 53 53 120 127
114 127 -2 -1 -47 -41 -99 -90z"  className="svg-elem-28"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M4195 86 c-77 -53 -112 -85 -95 -86 9 0 36 18 60 40 54 47 115 71
149 58 21 -7 22 -6 11 7 -21 25 -71 18 -125 -19z"  className="svg-elem-29"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M286 40 c7 -38 11 -46 20 -38 3 3 -2 21 -10 39 l-16 34 6 -35z"  className="svg-elem-30"></motion.path>
                    <motion.path 
                    fill="none"
                    strokeWidth="5"
                    stroke="yellow"
                    strokeDasharray="0 1"
                    style={{
                      pathLength
                    }} d="M4248 3 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"  className="svg-elem-31"></motion.path>
                </motion.g>
            </svg>
        </div>
    )
}

export default SvgSaitama