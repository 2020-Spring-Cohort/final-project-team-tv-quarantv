using Microsoft.EntityFrameworkCore.Migrations;

namespace QuaranTV.Migrations
{
    public partial class CommentModelMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TvShowId",
                table: "Comments",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Comments_TvShowId",
                table: "Comments",
                column: "TvShowId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_TvShows_TvShowId",
                table: "Comments",
                column: "TvShowId",
                principalTable: "TvShows",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_TvShows_TvShowId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_TvShowId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "TvShowId",
                table: "Comments");
        }
    }
}
