import React from "react";
import LinkSelectElement from "~/components/LinkSelectElement";

export default function FooterNavbar() {
  return (
    <>
      <ul className="flex h-[15.5rem] flex-col flex-wrap [&>*]:basis-1/5 [&>*]:mr-16">
        <li>
          <LinkSelectElement text={"Home"} href={"https://www.instrument.com/"} current />
        </li>
        <li>
          <LinkSelectElement text={"What We Do"} href={"https://www.instrument.com/what-we-do"} />
        </li>
        <li>
          <LinkSelectElement text={"Work"} href={"https://www.instrument.com/work"} />
        </li>
        <li>
          <LinkSelectElement text={"Who We Are"} href={"https://www.instrument.com/who-we-are"} />
        </li>
        <li>
          <LinkSelectElement text={"Articles"} href={"https://www.instrument.com/articles"} />
        </li>
        <li>
          <LinkSelectElement text={"Being Here"} href={"https://www.instrument.com/being-here"} />
        </li>
        <li>
          <LinkSelectElement text={"Careers"} href={"https://www.instrument.com/careers"} />
        </li>
        <li>
          <LinkSelectElement text={"Contact"} href={"https://www.instrument.com/contact"} />
        </li>
        <li>
          <LinkSelectElement text={"Privacy"} href={"https://www.instrument.com/privacy"} />
        </li>
      </ul>
    </>
  );
}
