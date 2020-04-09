using Microsoft.EntityFrameworkCore;
using QuaranTV.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuaranTV
{
    public class QuaranTvContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<TvShow> TvShows { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Watchlist> Watchlists { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=QuaranTv;Trusted_Connection=True;";
            optionsBuilder.UseSqlServer(connectionString)
                .UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            // TV Shows
            modelBuilder.Entity<TvShow>().HasData(
                new TvShow
                {
                    Id = 1,
                    Title = "Friends",
                    Image = "friends.jpg",
                    Season = "10",
                    ViewerDiscretion = "TV-14"
                },
                new TvShow
                {
                    Id = 2,
                    Title = "Game of Thrones",
                    Image = "gameofthrones.jpg",
                    Season = "8",
                    ViewerDiscretion = "TV-MA"
                },
                new TvShow
                {
                    Id = 3,
                    Title = "The Marvelous Mrs. Maisel",
                    Image = "maisel.jpg",
                    Season = "4",
                    ViewerDiscretion = "TV-MA"
                },
                new TvShow
                {
                    Id = 4,
                    Title = "Ozark",
                    Image = "ozark.jpg",
                    Season = "3",
                    ViewerDiscretion = "TV-MA"
                },
                new TvShow
                {
                    Id = 5,
                    Title = "The Fresh Prince",
                    Image = "freshprince.jpg",
                    Season = "6",
                    ViewerDiscretion = "TV-PG"
                },
                new TvShow
                {
                    Id = 6,
                    Title = "The Golden Girls",
                    Image = "goldengirls.jpg",
                    Season = "7",
                    ViewerDiscretion = "TV-PG"
                },
                new TvShow
                {
                    Id = 7,
                    Title = "Tiger King",
                    Image = "tigerking.jpg",
                    Season = "1",
                    ViewerDiscretion = "TV-MA"
                },
                new TvShow
                {
                    Id = 8,
                    Title = "Stranger Things",
                    Image = "strangerthings.jpg",
                    Season = "4",
                    ViewerDiscretion = "TV-14"
                },
                new TvShow
                {
                    Id = 9,
                    Title = "Dear White People",
                    Image = "dearwhitepeople.jpg",
                    Season = "4",
                    ViewerDiscretion = "TV-MA"
                },
                new TvShow
                {
                    Id = 10,
                    Title = "The Mandalorian",
                    Image = "mandalorian.jpg",
                    Season = "1",
                    ViewerDiscretion = "TV-PG"
                },
                new TvShow
                {
                    Id = 11,
                    Title = "Atlanta",
                    Image = "atlanta.jpg",
                    Season = "3",
                    ViewerDiscretion = "TV-MA"
                },
                new TvShow
                {
                    Id = 12,
                    Title = "Altered Carbon",
                    Image = "alteredcarbon.jpg",
                    Season = "2",
                    ViewerDiscretion = "TV-MA"
                },
                new TvShow
                {
                    Id = 13,
                    Title = "The Amazing Race",
                    Image = "theamazingrace.jpg",
                    Season = "32",
                    ViewerDiscretion = "TV-PG"
                },
                new TvShow
                {
                    Id = 14,
                    Title = "Daredevil",
                    Image = "daredevil.jpg",
                    Season = "3",
                    ViewerDiscretion = "TV-MA"
                },
                new TvShow
                {
                    Id = 15,
                    Title = "The Witcher",
                    Image = "thewitcher.jpg",
                    Season = "1",
                    ViewerDiscretion = "TV-MA"
                });

            // Users
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Name = "Dan",
                    Image = "dan.jpg"
                },
                new User
                {
                    Id = 2,
                    Name = "Nabil",
                    Image = "nabil.jpg"
                },
                new User
                {
                    Id = 3,
                    Name = "Tatyana",
                    Image = "tatyana.jpg"
                },
                new User
                {
                    Id = 4,
                    Name = "Erin",
                    Image = "erin.jpg"
                },
                new User
                {
                    Id = 5,
                    Name = "Eric",
                    Image = "eric.jpg"
                },
                new User
                {
                    Id = 6,
                    Name = "Ghassan",
                    Image = "ghassan.jpg"
                },
                new User
                {
                    Id = 7,
                    Name = "Karlyn",
                    Image = "karlyn.jpg"
                },
                new User
                {
                    Id = 8,
                    Name = "Carlton",
                    Image = "carlton.jpg"
                });
            base.OnModelCreating(modelBuilder);
        }
    }
}
