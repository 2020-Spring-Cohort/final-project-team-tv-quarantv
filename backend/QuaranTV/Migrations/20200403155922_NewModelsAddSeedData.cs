using Microsoft.EntityFrameworkCore.Migrations;

namespace QuaranTV.Migrations
{
    public partial class NewModelsAddSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "TvShows",
                columns: new[] { "Id", "Image", "Season", "Title", "ViewerDiscretion" },
                values: new object[,]
                {
                    { 1, "friends.jpg", "10", "Friends", "TV-14" },
                    { 15, "thewitcher.jpg", "1", "The Witcher", "TV-MA" },
                    { 14, "daredevil.jpg", "3", "Daredevil", "TV-MA" },
                    { 13, "theamazingrace.jpg", "32", "The Amazing Race", "TV-PG" },
                    { 11, "atlanta.jpg", "3", "Atlanta", "TV-MA" },
                    { 10, "mandalorian.jpg", "1", "The Mandalorian", "TV-PG" },
                    { 9, "dearwhitepeople.jpg", "4", "Dear White People", "TV-MA" },
                    { 12, "alteredcarbon.jpg", "2", "Altered Carbon", "TV-MA" },
                    { 7, "tigerking.jpg", "1", "Tiger King", "TV-MA" },
                    { 6, "goldengirls.jpg", "7", "The Golden Girls", "TV-PG" },
                    { 5, "freshprince.jpg", "6", "The Fresh Prince", "TV-PG" },
                    { 4, "ozark.jpg", "3", "Ozark", "TV-MA" },
                    { 3, "maisel.jpg", "4", "The Marvelous Mrs. Maisel", "TV-MA" },
                    { 2, "gameofthrones.jpg", "8", "Game of Thrones", "TV-MA" },
                    { 8, "strangerthings.jpg", "4", "Stranger Things", "TV-14" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Image", "Name" },
                values: new object[,]
                {
                    { 7, "karlyn.jpg", "Karlyn" },
                    { 1, "dan.jpg", "Dan" },
                    { 2, "nabil.jpg", "Nabil" },
                    { 3, "tatyana.jpg", "Tatyana" },
                    { 4, "erin.jpg", "Erin" },
                    { 5, "eric.jpg", "Eric" },
                    { 6, "ghassan.jpg", "Ghassan" },
                    { 8, "carlton.jpg", "Carlton" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 8);
        }
    }
}
