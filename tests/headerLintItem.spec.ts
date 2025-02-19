import { expect, test } from "@playwright/test";

test("header page nation", async ({ page }) => {
	await page.goto("http://localhost:3000/");

	await page.click("text=Pokémon List");
	await expect(page).toHaveURL("http://localhost:3000/pokemon");
	await page.goBack();

	await page.click("text=search");
	await expect(page).toHaveURL("http://localhost:3000/pokemon/search");
	await page.goBack();

	await page.click("text=Type Filter");
	await expect(page).toHaveURL("http://localhost:3000/pokemon/type");
	await page.goBack();

	await page.click("text=Login");
	await expect(page).toHaveURL("http://localhost:3000/login");
	await page.goBack();
});
