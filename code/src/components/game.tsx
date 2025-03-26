"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Game() {
  const leftFootRef = useRef<SVGGElement | null>(null);
  const [leftFootSlow, setLeftFootSlow] = useState(false);
  const rightFootRef = useRef<SVGGElement | null>(null);
  const [rightFootSlow, setRightFootSlow] = useState(false);
  const headRef = useRef<SVGGElement | null>(null);
  const yOffset = 0;
  const gap = 5;

  const [leftFootPosition, setLeftFootPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [rightFootPosition, setRightFootPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  interface MouseMoveEvent extends React.MouseEvent<SVGSVGElement, MouseEvent> {
    currentTarget: SVGSVGElement;
  }

  const onMouseMove = (e: MouseMoveEvent) => {
    const headRect = headRef.current?.getBoundingClientRect();
    const headBottom = headRect?.bottom;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const outOfBounds = y < headBottom! - yOffset;

    const dir = x < window.innerWidth / 2 ? 0 : 1;

    if (
      leftFootRef &&
      leftFootRef.current &&
      rightFootRef &&
      rightFootRef.current &&
      dir !== null
    ) {
      if (dir === 0) {
        setRightFootSlow(true);
        setLeftFootSlow(false);
      }
      if (dir === 1) {
        setRightFootSlow(false);
        setLeftFootSlow(true);
      }

      setLeftFootPosition({
        x:
          dir === 0
            ? Math.min(
                x - window.innerWidth / 2 + leftFootRef.current.getBBox().width,
                -gap
              )
            : -gap,
        y:
          dir === 0
            ? outOfBounds
              ? -window.innerHeight +
                  headBottom! +
                  leftFootRef.current.getBBox().height || 0
              : y - window.innerWidth / 2 + yOffset
            : 0,
      });

      setRightFootPosition({
        x:
          dir === 1
            ? Math.max(
                x -
                  window.innerWidth / 2 -
                  rightFootRef.current.getBBox().width,
                gap
              )
            : gap,
        y:
          dir === 1
            ? outOfBounds
              ? -window.innerHeight +
                  headBottom! +
                  rightFootRef.current.getBBox().height || 0
              : y - window.innerWidth / 2 + yOffset
            : 0,
      });
    }
  };

  return (
    <svg
      onMouseMove={onMouseMove}
      id="uuid-7fe2c69d-614e-4723-8158-3c79058997cd"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 408.9796 728.3367"
      className="w-full h-full relative p-8 overflow-visible"
    >
      <defs>
        <clipPath id="uuid-45c33c52-3ad8-4629-9f75-d54a9359ce5d">
          <path
            className="uuid-2582f636-3c79-4282-ac76-bbf0c6942c81"
            d="M101.2286,427.6634c-19.765,11.4636-44.4972,29.8998-65.0292,58.7765-11.5117,16.1902-35.1752,49.4713-31.8894,91.9163.9546,12.3311,2.681,34.6307,19.3837,45.0202,14.9176,9.2791,38.3493,6.9232,44.395-3.1264,3.3569-5.58-.1137-11.0932,5.0022-18.1331,4.5831-6.3066,10.0008-5.5046,13.1309-10.0046,5.722-8.2264-4.5623-21.924-8.1286-31.8893-7.2095-20.1455,7.9277-42.0245,25.0112-70.6568,10.7136-17.9561,17.5421-24.261,16.2573-35.641-1.329-11.772-10.3891-20.5547-18.1331-26.2618Z"
          />
        </clipPath>
        <clipPath id="uuid-86b4cb4e-1931-44ec-bea2-d72e1faff70e">
          <path
            className="uuid-2582f636-3c79-4282-ac76-bbf0c6942c81"
            d="M308.7511,427.6634c19.765,11.4636,44.4972,29.8998,65.0292,58.7765,11.5117,16.1902,35.1752,49.4713,31.8894,91.9163-.9546,12.3311-2.681,34.6307-19.3837,45.0202-14.9176,9.2791-38.3493,6.9232-44.395-3.1264-3.3569-5.58.1137-11.0932-5.0022-18.1331-4.5831-6.3066-10.0008-5.5046-13.1309-10.0046-5.722-8.2264,4.5623-21.924,8.1286-31.8893,7.2095-20.1455-7.9277-42.0245-25.0112-70.6568-10.7136-17.9561-17.5421-24.261-16.2573-35.641,1.329-11.772,10.3891-20.5547,18.1331-26.2618Z"
          />
        </clipPath>
        <clipPath id="uuid-600bf9ee-3d57-44f4-b11a-2c13abbe604f">
          <path
            className="uuid-a9af7b97-9975-47d9-9779-8efd92ee1df9"
            d="M316.1539,564.1092l-8.5615-126.8978c-.4162-6.1675-7.4347-9.4894-12.4682-5.9012l-86.4452,61.624c-2.7442,1.9564-6.4274,1.9564-9.1717,0l-86.5245-61.6805c-5.0165-3.5761-12.0139-.2894-12.4649,5.8547l-9.3174,126.9544c-.3361,4.5787,3.288,8.4785,7.879,8.4785h209.1921c4.5725,0,8.1901-3.8699,7.8823-8.432Z"
          />
        </clipPath>
        <clipPath id="uuid-1a16b5de-eb5c-4399-ace7-86cc56bd81c5">
          <rect
            className="uuid-bbd66d80-2ff4-4519-83a2-ec610f2f3ecd"
            x="54.7292"
            y="69.7755"
            width="149.3045"
            height="404.4359"
          />
        </clipPath>
        <clipPath id="uuid-238cb64b-ee21-4de1-9303-81a86e00ccd6">
          <rect
            className="uuid-bbd66d80-2ff4-4519-83a2-ec610f2f3ecd"
            x="204.0333"
            y="69.7755"
            width="149.3045"
            height="404.4359"
          />
        </clipPath>
        <clipPath id="uuid-34cea55a-2f0c-48c8-8364-f237fe664b7f">
          <rect
            className="uuid-bbd66d80-2ff4-4519-83a2-ec610f2f3ecd"
            x="50.7292"
            y="67.0297"
            width="153.3045"
            height="412.4332"
          />
        </clipPath>
        <clipPath id="uuid-78d8a53a-1be4-474c-bab3-72807638b07d">
          <rect
            className="uuid-bbd66d80-2ff4-4519-83a2-ec610f2f3ecd"
            x="204.0333"
            y="67.0297"
            width="153.3045"
            height="412.4332"
          />
        </clipPath>
      </defs>
      <g id="uuid-926858fd-f737-4786-ac69-0c4028290c9f" data-name="Arm">
        <path
          className="uuid-4aedaf1b-11ef-4431-b0be-1da6ec77b6ac"
          d="M101.2286,427.6634c-19.765,11.4636-44.4972,29.8998-65.0292,58.7765-11.5117,16.1902-35.1752,49.4713-31.8894,91.9163.9546,12.3311,2.681,34.6307,19.3837,45.0202,14.9176,9.2791,38.3493,6.9232,44.395-3.1264,3.3569-5.58-.1137-11.0932,5.0022-18.1331,4.5831-6.3066,10.0008-5.5046,13.1309-10.0046,5.722-8.2264-4.5623-21.924-8.1286-31.8893-7.2095-20.1455,7.9277-42.0245,25.0112-70.6568,10.7136-17.9561,17.5421-24.261,16.2573-35.641-1.329-11.772-10.3891-20.5547-18.1331-26.2618Z"
        />
        <g className="uuid-5f3a05c9-ebba-4b2b-9688-f1619b33b9cf">
          <rect
            className="uuid-ddda0865-b933-4282-8c32-84d9777d3c16"
            x="34.0462"
            y="392.4015"
            width="131.8393"
            height="111.6177"
            transform="translate(265.3298 19.7941) rotate(33.6791)"
          />
          <rect
            className="uuid-ee0c6c3e-05dd-484a-bd9b-0be0c4ee93bc"
            x="7.363"
            y="480.158"
            width="131.8393"
            height="16.1875"
            transform="translate(283.0558 41.3118) rotate(33.6791)"
          />
        </g>
        <path
          className="uuid-de6dbcdb-b3d9-4ed1-9d58-9a10a5b2e460"
          d="M101.2286,427.6634c-19.765,11.4636-44.4972,29.8998-65.0292,58.7765-11.5117,16.1902-35.1752,49.4713-31.8894,91.9163.9546,12.3311,2.681,34.6307,19.3837,45.0202,14.9176,9.2791,38.3493,6.9232,44.395-3.1264,3.3569-5.58-.1137-11.0932,5.0022-18.1331,4.5831-6.3066,10.0008-5.5046,13.1309-10.0046,5.722-8.2264-4.5623-21.924-8.1286-31.8893-7.2095-20.1455,7.9277-42.0245,25.0112-70.6568,10.7136-17.9561,17.5421-24.261,16.2573-35.641-1.329-11.772-10.3891-20.5547-18.1331-26.2618Z"
        />
      </g>
      <g id="uuid-79bcf6c7-8599-49bf-ad6a-4dce83a1ca2a" data-name="Arm">
        <path
          className="uuid-4aedaf1b-11ef-4431-b0be-1da6ec77b6ac"
          d="M308.7511,427.6634c19.765,11.4636,44.4972,29.8998,65.0292,58.7765,11.5117,16.1902,35.1752,49.4713,31.8894,91.9163-.9546,12.3311-2.681,34.6307-19.3837,45.0202-14.9176,9.2791-38.3493,6.9232-44.395-3.1264-3.3569-5.58.1137-11.0932-5.0022-18.1331-4.5831-6.3066-10.0008-5.5046-13.1309-10.0046-5.722-8.2264,4.5623-21.924,8.1286-31.8893,7.2095-20.1455-7.9277-42.0245-25.0112-70.6568-10.7136-17.9561-17.5421-24.261-16.2573-35.641,1.329-11.772,10.3891-20.5547,18.1331-26.2618Z"
        />
        <g className="uuid-ad4b71b7-86bb-4730-bae2-a81adb97846c">
          <rect
            className="uuid-ddda0865-b933-4282-8c32-84d9777d3c16"
            x="244.0941"
            y="392.4015"
            width="131.8393"
            height="111.6177"
            transform="translate(816.5447 649.276) rotate(146.3209)"
          />
          <rect
            className="uuid-ee0c6c3e-05dd-484a-bd9b-0be0c4ee93bc"
            x="270.7773"
            y="480.158"
            width="131.8393"
            height="16.1875"
            transform="translate(887.6372 707.8411) rotate(146.3209)"
          />
        </g>
        <path
          className="uuid-de6dbcdb-b3d9-4ed1-9d58-9a10a5b2e460"
          d="M308.7511,427.6634c19.765,11.4636,44.4972,29.8998,65.0292,58.7765,11.5117,16.1902,35.1752,49.4713,31.8894,91.9163-.9546,12.3311-2.681,34.6307-19.3837,45.0202-14.9176,9.2791-38.3493,6.9232-44.395-3.1264-3.3569-5.58.1137-11.0932-5.0022-18.1331-4.5831-6.3066-10.0008-5.5046-13.1309-10.0046-5.722-8.2264,4.5623-21.924,8.1286-31.8893,7.2095-20.1455-7.9277-42.0245-25.0112-70.6568-10.7136-17.9561-17.5421-24.261-16.2573-35.641,1.329-11.772,10.3891-20.5547,18.1331-26.2618Z"
        />
      </g>
      <rect
        className="uuid-720f8369-42cd-40d3-bdaf-5ab52bacc99c"
        x="115.5371"
        y="421.1947"
        width="172.6249"
        height="100.3633"
      />
      <g id="uuid-51da62dc-24a0-4b33-8065-07adb25ee8b3" data-name="Body">
        <rect
          className="uuid-9e5e0408-55ec-42da-a5d6-f0f5465d2b3a"
          x="99.9659"
          y="560.1808"
          width="208.2547"
          height="37.3528"
          rx="5.0331"
          ry="5.0331"
        />
        <g>
          <path
            className="uuid-055715d6-6f9b-452d-b23a-a3e42dfe959f"
            d="M316.1539,564.1092l-8.5615-126.8978c-.4162-6.1675-7.4347-9.4894-12.4682-5.9012l-86.4452,61.624c-2.7442,1.9564-6.4274,1.9564-9.1717,0l-86.5245-61.6805c-5.0165-3.5761-12.0139-.2894-12.4649,5.8547l-9.3174,126.9544c-.3361,4.5787,3.288,8.4785,7.879,8.4785h209.1921c4.5725,0,8.1901-3.8699,7.8823-8.432Z"
          />
          <g className="uuid-4e603e8d-68ed-4d28-92f7-2daf17a7a84b">
            <rect
              className="uuid-91a12936-eee4-414e-8b5b-21f6abb04d08"
              x="138.5909"
              y="448.0033"
              width="43.8417"
              height="137.2437"
            />
            <rect
              className="uuid-91a12936-eee4-414e-8b5b-21f6abb04d08"
              x="225.7539"
              y="448.0033"
              width="43.8417"
              height="137.2437"
            />
          </g>
          <path
            className="uuid-de6dbcdb-b3d9-4ed1-9d58-9a10a5b2e460"
            d="M316.1539,564.1092l-8.5615-126.8978c-.4162-6.1675-7.4347-9.4894-12.4682-5.9012l-86.4452,61.624c-2.7442,1.9564-6.4274,1.9564-9.1717,0l-86.5245-61.6805c-5.0165-3.5761-12.0139-.2894-12.4649,5.8547l-9.3174,126.9544c-.3361,4.5787,3.288,8.4785,7.879,8.4785h209.1921c4.5725,0,8.1901-3.8699,7.8823-8.432Z"
          />
        </g>
      </g>
      <motion.g
        id="uuid-ed64f863-49c1-4a7a-b60d-d75bccae10e3"
        data-name="Foot"
        ref={leftFootRef}
        initial={{ x: 0, y: 0 }}
        animate={{ x: leftFootPosition.x, y: leftFootPosition.y }}
        transition={{
          duration: leftFootSlow ? 2 : 0.2,
          type: leftFootSlow ? "tween" : "spring",
        }}
      >
        <path
          className="uuid-085ac5c7-c5a9-445f-ad19-a0e10e2bc15f"
          d="M133.6269,611.0794h45.5789c11.0383,0,20,8.9617,20,20v62.5622c0,2.6487-2.1504,4.7992-4.7992,4.7992h-75.9805c-2.6487,0-4.7992-2.1504-4.7992-4.7992v-62.5622c0-11.0383,8.9617-20,20-20Z"
        />
        <path
          className="uuid-bff99d05-6912-44f3-8792-dbf0149d575b"
          d="M123.6269,652.3695h65.5789c5.5192,0,10,4.4808,10,10v31.2721c0,2.6487-2.1504,4.7992-4.7992,4.7992h-75.9805c-2.6487,0-4.7992-2.1504-4.7992-4.7992v-31.2721c0-5.5192,4.4808-10,10-10Z"
        />
        <path
          className="uuid-b39e4a2c-35ea-4578-9112-c3ec4c51ba2c"
          d="M113.6269,677.7524h85.5789v14.6884c0,3.3115-2.6885,6-6,6h-73.5789c-3.3115,0-6-2.6885-6-6v-14.6884h0Z"
        />
        <rect
          className="uuid-3b916ab6-413d-42f1-b2ba-63e2c3bd228b"
          x="135.3539"
          y="647.49"
          width="42.125"
          height="8.7443"
          rx="2.7662"
          ry="2.7662"
        />
        <rect
          className="uuid-3b916ab6-413d-42f1-b2ba-63e2c3bd228b"
          x="129.5129"
          y="654.91"
          width="53.8069"
          height="8.7443"
          rx="2.7662"
          ry="2.7662"
        />
        <path
          className="uuid-1aa38a66-4b40-42cb-a041-365474b54781"
          d="M130.221,698.4408h12.7721v7.2468c0,2.23-1.8104,4.0404-4.0404,4.0404h-4.6913c-2.23,0-4.0404-1.8104-4.0404-4.0404v-7.2468h0Z"
        />
        <path
          className="uuid-1aa38a66-4b40-42cb-a041-365474b54781"
          d="M169.8396,698.4408h12.7721v7.2468c0,2.23-1.8104,4.0404-4.0404,4.0404h-4.6913c-2.23,0-4.0404-1.8104-4.0404-4.0404v-7.2468h0Z"
        />
      </motion.g>
      <motion.g
        id="uuid-199be915-b940-4be2-9452-0e5ff2348fd0"
        data-name="Foot"
        ref={rightFootRef}
        initial={{ x: 0, y: 0 }}
        animate={{ x: rightFootPosition.x, y: rightFootPosition.y }}
        transition={{
          duration: rightFootSlow ? 2 : 0.2,
          type: rightFootSlow ? "tween" : "spring",
        }}
      >
        <path
          className="uuid-085ac5c7-c5a9-445f-ad19-a0e10e2bc15f"
          d="M228.9807,611.0794h45.5789c11.0383,0,20,8.9617,20,20v62.5622c0,2.6487-2.1504,4.7992-4.7992,4.7992h-75.9805c-2.6487,0-4.7992-2.1504-4.7992-4.7992v-62.5622c0-11.0383,8.9617-20,20-20Z"
        />
        <path
          className="uuid-bff99d05-6912-44f3-8792-dbf0149d575b"
          d="M218.9807,652.3695h65.5789c5.5192,0,10,4.4808,10,10v31.2721c0,2.6487-2.1504,4.7992-4.7992,4.7992h-75.9805c-2.6487,0-4.7992-2.1504-4.7992-4.7992v-31.2721c0-5.5192,4.4808-10,10-10Z"
        />
        <path
          className="uuid-b39e4a2c-35ea-4578-9112-c3ec4c51ba2c"
          d="M208.9807,677.7524h85.5789v14.6884c0,3.3115-2.6885,6-6,6h-73.5789c-3.3115,0-6-2.6885-6-6v-14.6884h0Z"
        />
        <rect
          className="uuid-3b916ab6-413d-42f1-b2ba-63e2c3bd228b"
          x="230.7077"
          y="647.49"
          width="42.125"
          height="8.7443"
          rx="2.7662"
          ry="2.7662"
        />
        <rect
          className="uuid-3b916ab6-413d-42f1-b2ba-63e2c3bd228b"
          x="224.8667"
          y="654.91"
          width="53.8069"
          height="8.7443"
          rx="2.7662"
          ry="2.7662"
        />
        <path
          className="uuid-1aa38a66-4b40-42cb-a041-365474b54781"
          d="M225.5749,698.4408h12.7721v7.2468c0,2.23-1.8104,4.0404-4.0404,4.0404h-4.6913c-2.23,0-4.0404-1.8104-4.0404-4.0404v-7.2468h0Z"
        />
        <path
          className="uuid-1aa38a66-4b40-42cb-a041-365474b54781"
          d="M265.1934,698.4408h12.7721v7.2468c0,2.23-1.8104,4.0404-4.0404,4.0404h-4.6913c-2.23,0-4.0404-1.8104-4.0404-4.0404v-7.2468h0Z"
        />
      </motion.g>
      <g
        id="uuid-d0535521-2564-4979-8cd2-be24b8341dcc"
        data-name="Head"
        ref={headRef}
      >
        <g id="uuid-2cb780a1-72bb-4291-8106-5dfef46f83f8" data-name="Ear">
          <path
            className="uuid-91cc67d6-1cbb-4a77-8c42-d89a8b5fed8e"
            d="M347.3992,349.8963c17.9526,5.7688,52.7548-35.6938,56.2325-71.0716.6886-7.0052,1.9806-20.1483-7.0052-29.6697-8.3068-8.8019-20.1555-8.9549-21.0078-8.953-12.7166.0289-21.4294,8.9376-25.429,13.0271-11.3034,11.5575-17.006,30.2014-18.2217,48.0825-1.5743,23.1556,4.3758,45.0322,15.4312,48.5847Z"
          />
          <line
            className="uuid-1f92da03-2862-4b24-a522-fb9f74ef2f64"
            x1="372.9762"
            y1="278.0852"
            x2="349.4039"
            y2="309.3683"
          />
        </g>
        <g id="uuid-2b6d84de-5d53-4525-9326-6e7287186cf4" data-name="Ear">
          <path
            className="uuid-91cc67d6-1cbb-4a77-8c42-d89a8b5fed8e"
            d="M60.7228,349.8963c-17.9526,5.7688-52.7548-35.6938-56.2325-71.0716-.6886-7.0052-1.9806-20.1483,7.0052-29.6697,8.3068-8.8019,20.1555-8.9549,21.0078-8.953,12.7166.0289,21.4294,8.9376,25.429,13.0271,11.3034,11.5575,17.006,30.2014,18.2217,48.0825,1.5743,23.1556-4.3758,45.0322-15.4312,48.5847Z"
          />
          <line
            className="uuid-1f92da03-2862-4b24-a522-fb9f74ef2f64"
            x1="35.1458"
            y1="278.0852"
            x2="58.7181"
            y2="309.3683"
          />
        </g>
        <g>
          <g
            id="uuid-f01ab8f5-ca28-4b61-9b93-7d9809b0ec5e"
            data-name="&amp;lt;Mirror Repeat&amp;gt;"
          >
            <g className="uuid-c2d7024d-1e76-4125-8787-388326b1238f">
              <path
                className="uuid-beef6af7-266f-4102-926c-91d7dde0764d"
                d="M217.9259,474.2114c-19.1612-.7114-78.3383-5.3529-115.8339-50.2412-13.0839-15.6636-20.4334-32.5232-26.5162-54.428-4.7176-16.9885-44.8227-184.6643.6087-237.3973,27.3739-31.7733,79.9048-64.6678,134.3189-62.2431"
              />
            </g>
          </g>
          <g
            id="uuid-e8548286-0bd6-4ab5-a91c-c806afaf3705"
            data-name="&amp;lt;Mirror Repeat&amp;gt;"
          >
            <g className="uuid-33857de4-153a-4ff2-8211-67ce5e71342c">
              <path
                className="uuid-beef6af7-266f-4102-926c-91d7dde0764d"
                d="M190.1411,474.2114c19.1612-.7114,78.3383-5.3529,115.8339-50.2412,13.0839-15.6636,20.4334-32.5232,26.5162-54.428,4.7176-16.9885,44.8227-184.6643-.6087-237.3973-27.3739-31.7733-79.9048-64.6678-134.3189-62.2431"
              />
            </g>
          </g>
        </g>
        <path
          className="uuid-d965ae48-1390-4d6c-be49-b9c8d68d50ca"
          d="M73.6088,338.3966c8.5036-2.7695,21.8356,50.2043,60.2089,76.3543,8.026,5.4694,18.6821,10.8112,32.6272,23.8818,9.3611,8.7741,10.7361,12.1565,17.8272,15.4726,17.2451,8.0646,35.8047.542,38.6817-.6727,9.022-3.8091,13.7836-8.8464,20.8545-15.4727,21.0717-19.7471,28.3232-21.4369,42.3817-33.9726,39.2057-34.959,48.9389-80.784,55.1634-78.7089,3.7842,1.2616,1.8978,18.7691-1.0091,31.9545-7.1132,32.2652-28.6825,76.5025-74.6724,101.5815-12.6899,6.92-34.0254,18.5274-63.2362,17.8272-33.8568-.8115-57.1261-17.5293-72.9907-28.9272-11.4187-8.2038-51.7004-37.1441-58.1907-84.0907-1.1971-8.6589-2.0549-23.791,2.3546-25.2272Z"
        />
        <polygon
          className="uuid-91d3d66f-1533-4939-83d5-12a119787ae4"
          points="307.6957 154.2112 320.9825 205.8758 347.5561 254.2019 353.6885 190.7487 344.49 154.2112 307.6957 154.2112"
        />
        <polygon
          className="uuid-91d3d66f-1533-4939-83d5-12a119787ae4"
          points="104.5884 142.8727 87.2434 193.32 56.9185 239.3847 55.8411 175.645 67.9102 139.9527 104.5884 142.8727"
        />
        <polygon
          className="uuid-869b8637-2cb2-469d-9238-a7f22712fbc0"
          points="307.7413 154.2112 340.5178 154.2112 324.1295 123.2617 297.4986 130.4039 307.7413 154.2112"
        />
        <g>
          <g
            id="uuid-0e0cd005-a887-4116-bbb0-9d6966abdd78"
            data-name="&amp;lt;Mirror Repeat&amp;gt;"
          >
            <g className="uuid-a6aa9afa-9012-4fae-a3f9-4822827adeac">
              <path
                className="uuid-ae9f080f-f771-45aa-8ef1-3d055b37c9de"
                d="M217.9259,475.4656c-19.1612-.7114-78.3383-5.3529-115.8339-50.2412-13.0839-15.6636-20.4334-32.5232-26.5162-54.428-4.7176-16.9885-44.8227-184.6643.6087-237.3973,27.3739-31.7733,79.9048-64.6678,134.3189-62.2431"
              />
            </g>
          </g>
          <g
            id="uuid-9061bd01-49e1-4f8b-8564-63077f5972ba"
            data-name="&amp;lt;Mirror Repeat&amp;gt;"
          >
            <g className="uuid-6f777d4e-ee1f-4b25-ba9e-d40465942560">
              <path
                className="uuid-ae9f080f-f771-45aa-8ef1-3d055b37c9de"
                d="M190.1411,475.4656c19.1612-.7114,78.3383-5.3529,115.8339-50.2412,13.0839-15.6636,20.4334-32.5232,26.5162-54.428,4.7176-16.9885,44.8227-184.6643-.6087-237.3973-27.3739-31.7733-79.9048-64.6678-134.3189-62.2431"
              />
            </g>
          </g>
        </g>
        <polygon
          className="uuid-66b5e9ad-2e5d-42ca-a025-26ac4042305f"
          points="179.8946 228.3409 119.1979 217.7951 94.8255 239.121 117.5575 235.3714 187.3938 247.0889 179.8946 228.3409"
        />
        <polygon
          className="uuid-66b5e9ad-2e5d-42ca-a025-26ac4042305f"
          points="231.3349 228.3409 292.0316 217.7951 316.404 239.121 293.672 235.3714 223.8357 247.0889 231.3349 228.3409"
        />
        <path
          className="uuid-66b5e9ad-2e5d-42ca-a025-26ac4042305f"
          d="M114.8876,265.4162c1.334,5.3,62.6057,5.0081,63.9442-.3829,1.5026-6.0518-13.9725-18.0167-30.6319-18.5707-18.3856-.6114-34.8644,12.7868-33.3123,18.9536Z"
        />
        <path
          className="uuid-66b5e9ad-2e5d-42ca-a025-26ac4042305f"
          d="M228.0004,265.4162c1.334,5.3,62.6057,5.0081,63.9442-.3829,1.5026-6.0518-13.9725-18.0167-30.6319-18.5707-18.3856-.6114-34.8644,12.7868-33.3123,18.9536Z"
        />
        <path
          className="uuid-304d55c3-735e-4b24-8a07-32a06f93cd4e"
          d="M172.0126,328.6037c10.424,5.0316,21.3872,10.0632,32.0807,10.0632,10.4392,0,19.4932-5.0316,31.3175-10.0632"
        />
        <path
          className="uuid-064ccf6b-a54f-4380-83b4-8e1137657ac5"
          d="M203.8119,426.1118c19.633.9234,43.938-10.2885,45.3387-25.678,1.4625-16.0691-22.4597-32.159-43.6966-33.7666-20.2745-1.5348-45.3531,9.581-46.9646,24.9602-1.6933,16.1602,22.9017,33.4299,45.3225,34.4845Z"
        />
        <path
          className="uuid-6a553483-75cb-473f-824a-0e3ee690a10d"
          d="M147.9798,393.2694c3.4276-.6311,6.9311-1.182,10.5096-1.6421,38.3443-4.9303,73.1168,2.1298,101.4829,12.4801"
        />
        <path
          className="uuid-9188d96b-679c-4b20-bceb-c360d1efef07"
          d="M83.4821,194.6411l50.9293-64.5804-6.3006,45.1538,64.5804-59.3299-10.5009,43.0536,50.4042-49.3541-4.6958,40.4284,51.4247-48.8291,4.7254,36.228,64.0553-21.5268-51.4543-88.7324-11.0259,12.6011L215.7932,3v19.9517l-68.9336-14.1762,8.5536,19.4266-69.3058,22.0519,28.6787,12.601-39.7047,16.8014,12.6011,7.3506-27.3023,26.7772c5.4439,10.1015,10.8877,20.203,16.3315,30.3045,2.2568,16.8507,4.5136,33.7015,6.7704,50.5523Z"
        />
      </g>
    </svg>
  );
}
