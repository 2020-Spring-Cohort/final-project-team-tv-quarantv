﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using QuaranTV;

namespace QuaranTV.Migrations
{
    [DbContext(typeof(QuaranTvContext))]
    [Migration("20200402175005_SeedDataMigration")]
    partial class SeedDataMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("QuaranTV.Models.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Body")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rating")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TvShowId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TvShowId");

                    b.HasIndex("UserId");

                    b.ToTable("Comments");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Body = "placeholder text",
                            Rating = "placeholder rating",
                            TvShowId = 12,
                            UserId = 2
                        },
                        new
                        {
                            Id = 2,
                            Body = "placeholder text",
                            Rating = "placeholder rating",
                            TvShowId = 15,
                            UserId = 7
                        },
                        new
                        {
                            Id = 3,
                            Body = "placeholder text",
                            Rating = "placeholder rating",
                            TvShowId = 13,
                            UserId = 3
                        },
                        new
                        {
                            Id = 4,
                            Body = "placeholder text",
                            Rating = "placeholder rating",
                            TvShowId = 3,
                            UserId = 4
                        },
                        new
                        {
                            Id = 5,
                            Body = "placeholder text",
                            Rating = "placeholder rating",
                            TvShowId = 8,
                            UserId = 4
                        },
                        new
                        {
                            Id = 6,
                            Body = "placeholder text",
                            Rating = "placeholder rating",
                            TvShowId = 15,
                            UserId = 2
                        });
                });

            modelBuilder.Entity("QuaranTV.Models.TvShow", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Season")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ViewerDiscretion")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("TvShows");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Image = "friends.jpg",
                            Season = 10,
                            Title = "Friends",
                            ViewerDiscretion = "TV-14"
                        },
                        new
                        {
                            Id = 2,
                            Image = "gameofthrones.jpg",
                            Season = 8,
                            Title = "Game of Thrones",
                            ViewerDiscretion = "TV-MA"
                        },
                        new
                        {
                            Id = 3,
                            Image = "maisel.jpg",
                            Season = 4,
                            Title = "The Marvelous Mrs. Maisel",
                            ViewerDiscretion = "TV-MA"
                        },
                        new
                        {
                            Id = 4,
                            Image = "ozark.jpg",
                            Season = 3,
                            Title = "Ozark",
                            ViewerDiscretion = "TV-MA"
                        },
                        new
                        {
                            Id = 5,
                            Image = "freshprince.jpg",
                            Season = 6,
                            Title = "The Fresh Prince",
                            ViewerDiscretion = "TV-PG"
                        },
                        new
                        {
                            Id = 6,
                            Image = "goldengirls.jpg",
                            Season = 7,
                            Title = "The Golden Girls",
                            ViewerDiscretion = "TV-PG"
                        },
                        new
                        {
                            Id = 7,
                            Image = "tigerking.jpg",
                            Season = 1,
                            Title = "Tiger King",
                            ViewerDiscretion = "TV-MA"
                        },
                        new
                        {
                            Id = 8,
                            Image = "strangerthings.jpg",
                            Season = 4,
                            Title = "Stranger Things",
                            ViewerDiscretion = "TV-14"
                        },
                        new
                        {
                            Id = 9,
                            Image = "dearwhitepeople.jpg",
                            Season = 4,
                            Title = "Dear White People",
                            ViewerDiscretion = "TV-MA"
                        },
                        new
                        {
                            Id = 10,
                            Image = "mandalorian.jpg",
                            Season = 1,
                            Title = "The Mandalorian",
                            ViewerDiscretion = "TV-PG"
                        },
                        new
                        {
                            Id = 11,
                            Image = "atlanta.jpg",
                            Season = 3,
                            Title = "Atlanta",
                            ViewerDiscretion = "TV-MA"
                        },
                        new
                        {
                            Id = 12,
                            Image = "alteredcarbon.jpg",
                            Season = 2,
                            Title = "Altered Carbon",
                            ViewerDiscretion = "TV-MA"
                        },
                        new
                        {
                            Id = 13,
                            Image = "newgirl.jpg",
                            Season = 7,
                            Title = "New Girl",
                            ViewerDiscretion = "TV-14"
                        },
                        new
                        {
                            Id = 14,
                            Image = "blindspot.jpg",
                            Season = 5,
                            Title = "Blind Spot",
                            ViewerDiscretion = "TV-14"
                        },
                        new
                        {
                            Id = 15,
                            Image = "theamazingrace.jpg",
                            Season = 32,
                            Title = "The Amazing Race",
                            ViewerDiscretion = "TV-PG"
                        });
                });

            modelBuilder.Entity("QuaranTV.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Image = "dan.jpg",
                            Name = "Dan"
                        },
                        new
                        {
                            Id = 2,
                            Image = "nabil.jpg",
                            Name = "Nabil"
                        },
                        new
                        {
                            Id = 3,
                            Image = "tatyana.jpg",
                            Name = "Tatyana"
                        },
                        new
                        {
                            Id = 4,
                            Image = "erin.jpg",
                            Name = "Erin"
                        },
                        new
                        {
                            Id = 5,
                            Image = "eric.jpg",
                            Name = "Eric"
                        },
                        new
                        {
                            Id = 6,
                            Image = "ghassan.jpg",
                            Name = "Ghassan"
                        },
                        new
                        {
                            Id = 7,
                            Image = "karlyn.jpg",
                            Name = "Karlyn"
                        },
                        new
                        {
                            Id = 8,
                            Image = "carlton.jpg",
                            Name = "Carlton"
                        });
                });

            modelBuilder.Entity("QuaranTV.Models.UserTvShow", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("TvShowId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TvShowId");

                    b.HasIndex("UserId");

                    b.ToTable("UserTvShows");
                });

            modelBuilder.Entity("QuaranTV.Models.Comment", b =>
                {
                    b.HasOne("QuaranTV.Models.TvShow", "TvShow")
                        .WithMany("Comments")
                        .HasForeignKey("TvShowId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("QuaranTV.Models.User", "User")
                        .WithMany("Comments")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("QuaranTV.Models.UserTvShow", b =>
                {
                    b.HasOne("QuaranTV.Models.TvShow", "TvShow")
                        .WithMany("UserTvShows")
                        .HasForeignKey("TvShowId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("QuaranTV.Models.User", "User")
                        .WithMany("UserTvShows")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}