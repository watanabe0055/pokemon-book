import { expect, test } from "@playwright/test";

test("ポケモン検索ページで入力から要素表示までをチェック（フシギダネ）", async ({
	page,
}) => {
	await page.goto("http://localhost:3000/pokemon/search");

	await page.getByRole("textbox", { name: "ポケモンの名前またはID" }).click();
	await page.getByRole("textbox", { name: "ポケモンの名前またはID" }).fill("1");
	await page.getByRole("button", { name: "Search" }).click();
	await expect(
		page.getByRole("heading", { name: "フシギダネ" }),
	).not.toBeVisible();

	await page.getByRole("textbox", { name: "ポケモンの名前またはID" }).click();
	await page
		.getByRole("textbox", { name: "ポケモンの名前またはID" })
		.fill("フシギダネ");

	await page.getByRole("button", { name: "Search" }).click();

	await expect(
		page.getByRole("img", { name: "フシギダネの画像" }),
	).toBeVisible();

	await expect(page.getByRole("heading", { name: "フシギダネ" })).toBeVisible();
});

test("ポケモン検索ページで入力から要素表示までをチェック（ピカチュウ）", async ({
	page,
}) => {
	await page.goto("http://localhost:3000/pokemon/search");

	await page.getByRole("textbox", { name: "ポケモンの名前またはID" }).click();
	await page
		.getByRole("textbox", { name: "ポケモンの名前またはID" })
		.fill("25");
	await page.getByRole("button", { name: "Search" }).click();
	await expect(
		page.getByRole("heading", { name: "ピカチュウ" }),
	).not.toBeVisible();

	await page.getByRole("textbox", { name: "ポケモンの名前またはID" }).click();
	await page
		.getByRole("textbox", { name: "ポケモンの名前またはID" })
		.fill("ピカチュウ");

	await page.getByRole("button", { name: "Search" }).click();

	await expect(
		page.getByRole("img", { name: "ピカチュウの画像" }),
	).toBeVisible();

	await expect(page.getByRole("heading", { name: "ピカチュウ" })).toBeVisible();
});
